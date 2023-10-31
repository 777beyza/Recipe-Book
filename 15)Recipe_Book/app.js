// Get the recipe list elements
const recipeLists = document.querySelectorAll('.recipe-list > div');

// Get the recipe images container
const recipeImagesContainer = document.querySelector('.recipe-images');

// Get the recipe image element
const recipeImage = document.getElementById('recipe-img');

// Add event listeners to recipe list items
recipeLists.forEach(category => {
  category.addEventListener('mouseover', () => {
    const categoryName = category.className.split('_')[1];
    recipeImage.textContent = `Discover ${categoryName} Recipes!`;
    recipeImagesContainer.style.backgroundImage = `url(${categoryName}.jpg)`;
  });

  category.addEventListener('mouseout', () => {
    recipeImage.textContent = '';
    recipeImagesContainer.style.backgroundImage = 'none';
  });
});

// Handle "Add A New Recipe" button click
const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {
  alert('Feature coming soon!'); // You can replace this with your desired functionality
});

// Handle "Rate Our Food" button click
const rateBtn = document.querySelector('.rateBtn');
rateBtn.addEventListener('click', () => {
  alert('Feature coming soon!'); // You can replace this with your desired functionality
});
