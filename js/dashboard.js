document.addEventListener('DOMContentLoaded', function() {
    // --- Initialize DOM elements ---
    const propertySelect = document.getElementById('propertySelect');
    const propertyDetails = document.getElementById('propertyDetails');
    const propertyName = document.getElementById('propertyName');
    // Total stats elements
    const totalRoomsSpan = document.getElementById('totalRooms');
    const emptyRoomsSpan = document.getElementById('emptyRooms');
    const occupiedRoomsSpan = document.getElementById('occupiedRooms');
    const propertyAddress = document.getElementById('propertyAddress');
    const propertyTotalRooms = document.getElementById('propertyTotalRooms');
    const propertyEmptyRooms = document.getElementById('propertyEmptyRooms');
    const propertyOccupiedRooms = document.getElementById('propertyOccupiedRooms');
    // Filter section elements
    const filterSection = document.getElementById('filterSection');
    const roomListContainer = document.getElementById('roomList');
    const filterButtons = document.querySelectorAll('.filter-btn button'); // Select buttons directly for forEach
    const template = document.getElementById('roomCardTemplate');
    // Serach input
    const searchInput = document.getElementById('searchInput');

    // --- Global variable to hold rooms of the selected property ---
    let currentRooms = [];
    // --- Ensure mockData is loaded (assuming it's global from mockdata.js) ---
    if (typeof mockData === 'undefined' || !mockData.properties) {
        console.error("FATAL: mockData is not available. Check if mockdata.js loaded correctly.");
        // Display error to user if needed
        if (roomListContainer) roomListContainer.innerHTML = '<p style="color: red; font-weight: bold;">Error: Property data failed to load.</p>';
        return; // Stop script execution
    }

    // --- Calculation Functions ---

    function calculateTotalStats() {
        let totalRooms = 0;
        let occupiedRooms = 0;

        mockData.properties.forEach(property => {
            totalRooms += property.rooms?.length || 0;
            property.rooms?.forEach(room => {
                // Using 'currentStatus' to determine occupancy
                if (room.currentStatus && room.currentStatus.toLowerCase() !== 'empty') {
                    occupiedRooms++;
                }
            });
        });

        const emptyRooms = totalRooms - occupiedRooms;
        if(totalRoomsSpan) totalRoomsSpan.textContent = totalRooms;
        if(emptyRoomsSpan) emptyRoomsSpan.textContent = emptyRooms;
        if(occupiedRoomsSpan) occupiedRoomsSpan.textContent = occupiedRooms;
    }

    function calculatePropertyStats(property) {
        if (!property || !property.rooms) {
            return { total: 0, occupied: 0, empty: 0 };
        }
        const total = property.rooms.length;
        let occupied = 0;
        property.rooms.forEach(room => {
            // Using 'currentStatus' to determine occupancy
            if (room.currentStatus && room.currentStatus.toLowerCase() !== 'empty') {
                occupied++;
            }
        });
        const empty = total - occupied;
        return { total, occupied, empty };
    }

    // --- Display Rooms Function ---

    function displayRooms(roomsToDisplay) {
        if (!roomListContainer) {
            console.error("Room list container (#roomList) not found.");
            return;
        }
        if (!template) {
            console.error("Room card template (#roomCardTemplate) not found.");
            return;
        }

        roomListContainer.innerHTML = ''; // Clear previous list

        if (!roomsToDisplay || roomsToDisplay.length === 0) {
             roomListContainer.innerHTML = '<p>No rooms match the current filter.</p>';
             return;
        }

        roomsToDisplay.forEach(room => {
            const roomCardClone = template.content.cloneNode(true);
            const roomCardElement = roomCardClone.querySelector('.room-card');

            if (!roomCardElement) return; // Skip if template is malformed

            const roomNameEl = roomCardElement.querySelector('.room-name');
            const statusBadgeEl = roomCardElement.querySelector('.status-badge');

            if (roomNameEl) roomNameEl.textContent = `Room name : ${room.id}`;
            if (statusBadgeEl) {
                statusBadgeEl.textContent = room.currentStatus;
                statusBadgeEl.className = 'status-badge'; // Reset base classes
                statusBadgeEl.classList.add(room.currentStatus.toLowerCase());
            }

            // Add click handler for room details (if .room-details exists in template)
            const roomHeader = roomCardElement.querySelector('.room-header');
            const roomDetails = roomCardElement.querySelector('.room-details'); // Check if this exists in your template!
            if (roomHeader && roomDetails) {
                roomHeader.addEventListener('click', () => {
                    roomDetails.classList.toggle('expanded');
                });
            }

            roomListContainer.appendChild(roomCardClone);
        });
    }

    // --- Filter Rooms Function ---

    function filterRooms(statusFilter = '') {
        console.log(`Filtering by status: '${statusFilter || 'Show All'}'`); // Debugging
        if (!Array.isArray(currentRooms)) {
            console.error("Cannot filter: currentRooms is not an array.");
            displayRooms([]);
            return;
        }

        let filteredRooms = [];
        if (statusFilter) {
            filteredRooms = currentRooms.filter(room =>
                room.currentStatus.toLowerCase() === statusFilter.toLowerCase()
            );
        } else { // Show all
            filteredRooms = [...currentRooms]; // Copy all rooms
        }
        displayRooms(filteredRooms);
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const status = button.getAttribute('data-filter'); // Get the status

            // Update active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter and display rooms
            filterRooms(status);
        });
    });


    // --- Initial Setup ---

    calculateTotalStats(); // Calculate overall stats initially

    // Populate property dropdown
    mockData.properties.forEach(property => {
        const option = document.createElement('option');
        option.value = property.id;
        option.textContent = property.name;
        propertySelect.appendChild(option);
    });

    // --- Event Listener for Property Selection ---

    propertySelect.addEventListener('change', function() {
        const selectedPropertyId = this.value;
        const selectedProperty = mockData.properties.find(p => p.id == selectedPropertyId);

        if (selectedProperty) {
            // ** Assign rooms to currentRooms **
            currentRooms = selectedProperty.rooms || []; // Assign rooms, default to empty array if missing

            // Update Property Details display
            if(propertyDetails) propertyDetails.style.display = 'block';
            if(propertyName) propertyName.textContent = selectedProperty.name;
            if(propertyAddress) propertyAddress.textContent = `Address: ${selectedProperty.address}`;

            // Calculate and display property-specific stats
            const propertyStats = calculatePropertyStats(selectedProperty);
            if(propertyTotalRooms) propertyTotalRooms.textContent = propertyStats.total;
            if(propertyEmptyRooms) propertyEmptyRooms.textContent = propertyStats.empty;
            if(propertyOccupiedRooms) propertyOccupiedRooms.textContent = propertyStats.occupied;

            // Show filter section
            if(filterSection) filterSection.style.display = 'block';

            // Set initial filter to "Show All" and apply it
            const initialStatus = ''; // Empty string for "Show All"
            filterRooms(initialStatus); // Display initially filtered rooms

            // Set the "Show All" button as active
            filterButtons.forEach(btn => btn.classList.remove('active'));
            const showAllButton = document.querySelector('.filter-btn button[data-filter=""]');
            if (showAllButton) {
                showAllButton.classList.add('active');
            }

        } else {
            // Reset if no property selected
            currentRooms = [];
            if(propertyDetails) propertyDetails.style.display = 'none';
            if(filterSection) filterSection.style.display = 'none';
            if(roomListContainer) roomListContainer.innerHTML = ''; // Clear room list
        }
    });

    // --- Event Listeners for Filter Buttons (using original forEach) ---


    // --- Event Listener for Search Input ---
    function searchRooms(query) {
        if (!currentRooms || currentRooms.length === 0) {
            displayRooms([]); // Display empty message if no rooms
            return;
        }

        const lowerCaseQuery = query.toLowerCase();
        const searchedRooms = currentRooms.filter(room => {
            const roomName = room.id.toLowerCase(); // Assuming room.id is like "A101"
            return roomName.includes(lowerCaseQuery);
        });

        displayRooms(searchedRooms);
    }
    searchInput.addEventListener('input', function() {
        searchRooms(this.value);
    });

}); // End DOMContentLoaded