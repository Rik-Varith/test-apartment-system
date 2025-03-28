// Initialize DOM elements
const propertySelect = document.getElementById('propertySelect');
const totalRoomsSpan = document.getElementById('totalRooms');
const emptyRoomsSpan = document.getElementById('emptyRooms');
const occupiedRoomsSpan = document.getElementById('occupiedRooms');
const propertyDetails = document.getElementById('propertyDetails');
const filterSection = document.getElementById('filterSection');
const propertyName = document.getElementById('propertyName');
const propertyAddress = document.getElementById('propertyAddress');
const roomList = document.getElementById('roomList');
const propertyTotalRooms = document.getElementById('propertyTotalRooms');
const propertyEmptyRooms = document.getElementById('propertyEmptyRooms');
const propertyOccupiedRooms = document.getElementById('propertyOccupiedRooms');
const filterButtons = document.querySelectorAll('.filter-btn');

// Declare currentRooms variable to store rooms of selected property for filtering
let currentRooms = [];

// Calculate total stats from all properties
function calculateTotalStats() {
    let totalRooms = 0;
    let occupiedRooms = 0;

    // Sum up rooms from all properties
    mockData.properties.forEach(property => {
        totalRooms += property.totalRooms;
    });

    // Calculate occupied rooms
    mockData.properties.forEach(property => {
        property.rooms.forEach(room => {
            if (room.currentStatus !== 'empty') {
                occupiedRooms++;
            }
        });
    });

    const emptyRooms = totalRooms - occupiedRooms;

    // Update display
    totalRoomsSpan.textContent = totalRooms;
    emptyRoomsSpan.textContent = emptyRooms;
    occupiedRoomsSpan.textContent = occupiedRooms;
}

function displayRooms(rooms) {
    const template = document.getElementById('roomCardTemplate');
    roomList.innerHTML = '';

    rooms.forEach(room => {
        const roomCard = template.content.cloneNode(true);
        
        // Set room details
        roomCard.querySelector('.room-name').textContent = `Room name : ${room.id}`;
        roomCard.querySelector('.status-badge').textContent = room.currentStatus;
        roomCard.querySelector('.status-badge').classList.add(room.currentStatus.toLowerCase());

        // Add click handler for room details
        const roomHeader = roomCard.querySelector('.room-header');
        const roomDetails = roomCard.querySelector('.room-details');
        
        roomHeader.addEventListener('click', () => {
            roomDetails.classList.toggle('expanded');
        });

        roomList.appendChild(roomCard);
    });
}

function clearSelection() {
    propertySelect.value = '';
    propertySelect.dispatchEvent(new Event('change'));
}
function calculatePropertyStats(property) {
    const total = property.rooms.length;
    const occupied = property.rooms.filter(room => room.currentStatus !== 'empty').length;
    const empty = total - occupied;
    return { total, occupied, empty };
}
function filterRooms(status, searchterm = '') {
    if (!currentRooms || currentRooms.length === 0) {
        console.warn('No rooms to filter');
        return;
    }

    let filteredRooms = currentRooms;

    if (status) {
        filteredRooms = filteredRooms.filter(room => room.currentStatus.toLowerCase() === status.toLowerCase());
    }

    if (searchTerm) {
        filteredRooms = filteredRooms.filter(room => room.id.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    displayRooms(filteredRooms);
}


filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const status = button.getAttribute('data-filter');
        filterRooms(status);
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


    // Optionally, set the first button (Show all) as active by default
    filterButtons[3].classList.add('active');

function filterRooms(status) {
    // Ensure currentRooms is populated before filtering
    if (!currentRooms || currentRooms.length === 0) {
        console.warn('No rooms to filter');
        return;
    }

    let filteredRooms;

    if (status) {
        // Filter rooms by exact status (case-insensitive)
        filteredRooms = currentRooms.filter(room => 
            room.currentStatus.toLowerCase() === status.toLowerCase()
        );
    } else {
        // If no status (show all), use all current rooms
        filteredRooms = currentRooms;
    }

    // Debug logging
    console.log(`Filtering rooms with status: ${status}`);
    console.log(`Total rooms: ${currentRooms.length}`);
    console.log(`Filtered rooms: ${filteredRooms.length}`);

    // Display filtered rooms
    displayRooms(filteredRooms);
}

// Modify the property selection event listener to set currentRooms
propertySelect.addEventListener('change', function() {
    const selectedProperty = mockData.properties.find(p => p.id == this.value);
    
    if (selectedProperty) {
        // Crucially, set currentRooms here
        currentRooms = selectedProperty.rooms;

        // Rest of your existing code...
        propertyDetails.style.display = 'block';
        propertyName.textContent = selectedProperty.name;
        propertyAddress.textContent = `Address: ${selectedProperty.address}`;

        const propertyStats = calculatePropertyStats(selectedProperty);
        propertyTotalRooms.textContent = propertyStats.total;
        propertyEmptyRooms.textContent = propertyStats.empty;
        propertyOccupiedRooms.textContent = propertyStats.occupied;

        filterSection.style.display = 'block';

        // Display all rooms initially
        displayRooms(currentRooms);
    } else {
        propertyDetails.style.display = 'none';
        filterSection.style.display = 'none';
        roomList.innerHTML = '';
        currentRooms = []; // Reset currentRooms
    }
});

// Update filter buttons event listener
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const status = button.getAttribute('data-filter');
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');

        // Filter rooms
        filterRooms(status);
    });
});


// Ensure "Show all" is active by default
document.addEventListener('DOMContentLoaded', () => {
    // Select the "Show all" button (assuming it's the last button)
    const showAllButton = filterButtons[filterButtons.length - 1];
    showAllButton.classList.add('active');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Calculate and display total stats first
    calculateTotalStats();

    // Populate dropdown with properties
    mockData.properties.forEach(property => {
        const option = document.createElement('option');
        option.value = property.id;
        option.textContent = property.name;
        propertySelect.appendChild(option);
    });

// Handle property selection
    propertySelect.addEventListener('change', function() {
    const selectedProperty = mockData.properties.find(p => p.id == this.value);
    
        if (selectedProperty) {
        // Show property details
        propertyDetails.style.display = 'block';
        propertyName.textContent = selectedProperty.name;
        propertyAddress.textContent = `Address: ${selectedProperty.address}`;

        // Calculate and display property-specific stats
        const propertyStats = calculatePropertyStats(selectedProperty);
        propertyTotalRooms.textContent = propertyStats.total;
        propertyEmptyRooms.textContent = propertyStats.empty;
        propertyOccupiedRooms.textContent = propertyStats.occupied;

        // Show filter section
        filterSection.style.display = 'block';

        // Display rooms
        displayRooms(selectedProperty.rooms);
        } else {
        // Reset everything
        propertyDetails.style.display = 'none';
        filterSection.style.display = 'none';
        roomList.innerHTML = '';
        }
    });


});