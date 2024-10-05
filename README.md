Matrix Rank Calculator
This project is a simple web-based matrix rank calculator built using HTML, CSS, and JavaScript. It allows users to input a matrix and calculates its rank through Gaussian elimination.

Features
Input matrix size and values dynamically.
Generate input fields for matrices of different sizes.
Calculate the rank of a matrix using a built-in JavaScript function.
Option to go back and modify the matrix size or values.
Responsive design for better usability across devices.
Files
index.html: The main structure of the web page, containing input forms and placeholders for the matrix and result display.
style.css: The stylesheet to give the web page a modern and clean look, with responsive design and user-friendly interface components.
script.js: The JavaScript logic that handles the dynamic generation of the matrix input fields and calculates the matrix rank.
How to Use
Open index.html in your web browser.
Enter the number of rows and columns for your matrix.
Click the "Generate Matrix" button to create input fields for the matrix elements.
Input values into the matrix fields.
Click "Calculate Rank" to compute and display the rank of the matrix.
You can click "Back" to modify the matrix dimensions or values if needed.
How it Works
The matrix rank is calculated using Gaussian elimination. The code processes the matrix row-by-row, making the elements below the main diagonal zero by subtracting a multiple of the row from the other rows. The rank is determined by the number of non-zero rows in the matrix after this process.
Customization
You can modify the appearance of the web page by editing the style.css file. For instance, you can adjust the button colors, font styles, or container sizes. The matrix rank calculation logic can also be customized or expanded in script.js.

Let me know if you want to add or adjust anything!
