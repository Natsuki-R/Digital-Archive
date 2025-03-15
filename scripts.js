const isProduction = window.location.hostname !== 'localhost' &&
    !window.location.hostname.includes('127.0.0.1');
const basePath = isProduction ? '.' : '/public';

console.log('isProduction', isProduction);
console.log('basePath', basePath);

document.addEventListener('DOMContentLoaded', function () {
    try {
        // Update current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Sample data - replace with your actual painting information
        const paintings = [

            // DIY
            { id: 0, title: "DIY CLAY", year: "2021", fullImage: `${basePath}/images/diy/clay.jpg`, thumbnail: `${basePath}/images/thumbnails/clay.jpg`, },

            // paintings
            { id: 0, title: "Digital Paint", year: "2022", fullImage: `${basePath}/images/3d/ink_color_1.png`, thumbnail: `${basePath}/images/thumbnails/ink_color_1.jpg`, },
            // { id: 0, title: "Digital Paint", year: "2022", fullImage: `${basePath}/images/3d/ink_color_2.png`, thumbnail: `${basePath}/images/thumbnails/ink_color_2.jpg`, },
            { id: 0, title: "Flow", year: "2022", fullImage: `${basePath}/images/3d/flow.JPG`, thumbnail: `${basePath}/images/thumbnails/flow.jpg`, },
            { id: 0, title: "Egg", year: "2021", fullImage: `${basePath}/images/paintings/egg.jpg`, thumbnail: `${basePath}/images/thumbnails/egg.jpg`, },
            { id: 0, title: "Skull Injection", year: "2022", fullImage: `${basePath}/images/paintings/skull.jpg`, thumbnail: `${basePath}/images/thumbnails/skull.jpg`, },
            { id: 0, title: "Goldfish", year: "2023", fullImage: `${basePath}/images/paintings/goldfish.jpg`, thumbnail: `${basePath}/images/thumbnails/goldfish.jpg`, },
            { id: 0, title: "Mist", year: "2022", fullImage: `${basePath}/images/paintings/mist.png`, thumbnail: `${basePath}/images/thumbnails/mist.jpg`, },
            { id: 0, title: "Sparrow On a Branch", year: "2022", fullImage: `${basePath}/images/paintings/sparrow_on_a_branch.jpg`, thumbnail: `${basePath}/images/thumbnails/sparrow_on_a_branch.jpg`, },
            { id: 0, title: "Desk Lamp", year: "2023", fullImage: `${basePath}/images/paintings/desk_lamp.jpg`, thumbnail: `${basePath}/images/thumbnails/desk_lamp.jpg`, },
            { id: 0, title: "Washing Machine", year: "2022", fullImage: `${basePath}/images/paintings/washing_machine.jpg`, thumbnail: `${basePath}/images/thumbnails/washing_machine.jpg`, },
            { id: 0, title: "Woman In Dress", year: "2021", fullImage: `${basePath}/images/paintings/woman_in_dress.jpg`, thumbnail: `${basePath}/images/thumbnails/woman_in_dress.jpg`, },
            { id: 0, title: "Mount Fuji", year: "2022", fullImage: `${basePath}/images/paintings/mount_fuji.jpg`, thumbnail: `${basePath}/images/thumbnails/mount_fuji.jpg`, },
            { id: 0, title: "Friends", year: "2023", fullImage: `${basePath}/images/paintings/friends.png`, thumbnail: `${basePath}/images/thumbnails/friends.jpg`, },
            { id: 0, title: "Woman", year: "2022", fullImage: `${basePath}/images/paintings/woman.jpg`, thumbnail: `${basePath}/images/thumbnails/woman.jpg`, },
            { id: 0, title: "Random", year: "2022", fullImage: `${basePath}/images/paintings/random.jpg`, thumbnail: `${basePath}/images/thumbnails/random.jpg`, },
            { id: 0, title: "Potted Flower", year: "2022", fullImage: `${basePath}/images/paintings/potted_flower.jpg`, thumbnail: `${basePath}/images/thumbnails/potted_flower.jpg`, },
            { id: 0, title: "Boy Under Umbrella", year: "2022", fullImage: `${basePath}/images/paintings/boy_under_umbrella.jpg`, thumbnail: `${basePath}/images/thumbnails/boy_under_umbrella.jpg`, },
            { id: 0, title: "JOJO", year: "2021", fullImage: `${basePath}/images/paintings/JOJO.jpg`, thumbnail: `${basePath}/images/thumbnails/JOJO.jpg`, },
            { id: 0, title: "Sunset", year: "2022", fullImage: `${basePath}/images/paintings/sunset.jpg`, thumbnail: `${basePath}/images/thumbnails/sunset.jpg`, },
            // { id: 0, title: "Sunset", year: "2022", fullImage: `${basePath}/images/paintings/sunset_frame.jpg`, thumbnail: `${basePath}/images/thumbnails/sunset_frame.jpg`, },
            { id: 0, title: "Moon Sea", year: "2022", fullImage: `${basePath}/images/paintings/moon_sea.jpg`, thumbnail: `${basePath}/images/thumbnails/moon_sea.jpg`, },
            { id: 0, title: "Maple", year: "2021", fullImage: `${basePath}/images/paintings/maple.jpg`, thumbnail: `${basePath}/images/thumbnails/maple.jpg`, },
            { id: 0, title: "Girl", year: "2022", fullImage: `${basePath}/images/paintings/girl.jpg`, thumbnail: `${basePath}/images/thumbnails/girl.jpg`, },
            // { id: 0, title: "Mount Fuji", year: "2022", fullImage: `${basePath}/images/paintings/mount_fuji_frame.jpg`, thumbnail: `${basePath}/images/thumbnails/mount_fuji_frame.jpg`, },
            { id: 0, title: "Bamboo", year: "2022", fullImage: `${basePath}/images/paintings/bamboo.jpg`, thumbnail: `${basePath}/images/thumbnails/bamboo.jpg`, },
            { id: 0, title: "Elevator", year: "2021", fullImage: `${basePath}/images/paintings/elevator.jpg`, thumbnail: `${basePath}/images/thumbnails/elevator.jpg`, },
            { id: 0, title: "Still Life", year: "2020", fullImage: `${basePath}/images/paintings/still_life_1.jpg`, thumbnail: `${basePath}/images/thumbnails/still_life_1.jpg`, },
            { id: 0, title: "Still Life", year: "2022", fullImage: `${basePath}/images/paintings/still_life_2.jpg`, thumbnail: `${basePath}/images/thumbnails/still_life_2.jpg`, },
            { id: 0, title: "Still Life", year: "2022", fullImage: `${basePath}/images/paintings/still_life_2_frame.jpg`, thumbnail: `${basePath}/images/thumbnails/still_life_2_frame.jpg`, },
            { id: 0, title: "Still Life", year: "2022", fullImage: `${basePath}/images/paintings/still_life_3.jpg`, thumbnail: `${basePath}/images/thumbnails/still_life_3.jpg`, },
            { id: 0, title: "Sketch", year: "2022", fullImage: `${basePath}/images/paintings/sketch_1.jpg`, thumbnail: `${basePath}/images/thumbnails/sketch_1.jpg`, },
            { id: 0, title: "Sketch", year: "2022", fullImage: `${basePath}/images/paintings/sketch_2.jpg`, thumbnail: `${basePath}/images/thumbnails/sketch_2.jpg`, },
            { id: 0, title: "Sketch", year: "2022", fullImage: `${basePath}/images/paintings/sketch_3.jpg`, thumbnail: `${basePath}/images/thumbnails/sketch_3.jpg`, },
            { id: 0, title: "Sketch", year: "2022", fullImage: `${basePath}/images/paintings/sketch_4.jpg`, thumbnail: `${basePath}/images/thumbnails/sketch_4.jpg`, },
            { id: 0, title: "Sketch", year: "2022", fullImage: `${basePath}/images/paintings/sketch_5.jpg`, thumbnail: `${basePath}/images/thumbnails/sketch_5.jpg`, },
            { id: 0, title: "Heart In Eye", year: "2022", fullImage: `${basePath}/images/paintings/heart_in_eye.jpg`, thumbnail: `${basePath}/images/thumbnails/heart_in_eye.jpg`, },

            // 3D
            { id: 0, title: "C4D Collection", year: "2022", fullImage: `${basePath}/images/3d/collection.JPG`, thumbnail: `${basePath}/images/thumbnails/collection.jpg`, },
            { id: 0, title: "Gear Castle(C4D)", year: "2022", fullImage: `${basePath}/images/3d/gear_castle.png`, thumbnail: `${basePath}/images/thumbnails/gear_castle.jpg`, },
            { id: 0, title: "UI(C4D)", year: "2022", fullImage: `${basePath}/images/3d/UI.PNG`, thumbnail: `${basePath}/images/thumbnails/UI.jpg`, },
            { id: 0, title: "Yellow House(C4D)", year: "2022", fullImage: `${basePath}/images/3d/yellow_house.PNG`, thumbnail: `${basePath}/images/thumbnails/yellow_house.jpg`, },
            { id: 0, title: "Infinite Samsara(C4D)", year: "2022", fullImage: `${basePath}/images/3d/infinite_samsara.jpg`, thumbnail: `${basePath}/images/thumbnails/infinite_samsara.jpg`, },
            { id: 0, title: "Classroom(C4D)", year: "2022", fullImage: `${basePath}/images/3d/classroom_1.png`, thumbnail: `${basePath}/images/thumbnails/classroom_1.jpg`, },
            { id: 0, title: "Classroom(C4D)", year: "2022", fullImage: `${basePath}/images/3d/classroom_2.png`, thumbnail: `${basePath}/images/thumbnails/classroom_2.jpg`, },
            { id: 0, title: "App Design(Figma)", year: "2022", fullImage: `${basePath}/images/3d/figma_1.png`, thumbnail: `${basePath}/images/thumbnails/figma_1.jpg`, },
            { id: 0, title: "App Design(C4D)", year: "2022", fullImage: `${basePath}/images/3d/figma_2.png`, thumbnail: `${basePath}/images/thumbnails/figma_2.jpg`, },
            { id: 0, title: "App Design(C4D)", year: "2022", fullImage: `${basePath}/images/3d/figma_3.png`, thumbnail: `${basePath}/images/thumbnails/figma_3.jpg`, },

        ];

        // Gallery and lightbox elements
        const gallery = document.getElementById('gallery');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxYear = document.getElementById('lightbox-year');
        const closeLightbox = document.getElementById('close-lightbox');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        let currentIndex = 0;

        // Generate gallery items
        paintings.forEach((painting, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
            <img src="${painting.thumbnail}" 
                 alt="${painting.title}" 
                 loading="lazy">
            <div class="gallery-item-info">
                <h3 class="painting-title">${painting.title}</h3>
                <p class="painting-year">${painting.year}</p>
            </div>
        `;

            galleryItem.addEventListener('click', () => {
                openLightbox(index);
            });

            gallery.appendChild(galleryItem);
        });

        // Open lightbox
        function openLightbox(index) {
            currentIndex = index;
            updateLightboxContent();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close lightbox
        function closeLightboxFunc() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Update lightbox content
        function updateLightboxContent() {
            const painting = paintings[currentIndex];
            lightboxImage.src = painting.fullImage;
            lightboxImage.alt = painting.title;
            lightboxTitle.textContent = painting.title;
            lightboxYear.textContent = painting.year;
        }

        // Navigate to previous painting
        function prevPainting() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : paintings.length - 1;
            updateLightboxContent();
        }

        // Navigate to next painting
        function nextPainting() {
            currentIndex = (currentIndex < paintings.length - 1) ? currentIndex + 1 : 0;
            updateLightboxContent();
        }

        // Event listeners
        closeLightbox.addEventListener('click', closeLightboxFunc);
        prevButton.addEventListener('click', prevPainting);
        nextButton.addEventListener('click', nextPainting);

        // Close lightbox when clicking outside the content
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                closeLightboxFunc();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function (e) {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') {
                closeLightboxFunc();
            } else if (e.key === 'ArrowLeft') {
                prevPainting();
            } else if (e.key === 'ArrowRight') {
                nextPainting();
            }
        });

        // Prevent image dragging
        lightboxImage.addEventListener('dragstart', function (e) {
            e.preventDefault();
        });
    } catch (error) {
        console.error('Gallery initialization failed:', error);
        document.body.innerHTML += '<p>Error loading gallery: ' + error.message + '</p>';
    }
});