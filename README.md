WEPP and Tillage Erosion Prediction Application
This application is a web-based tool that allows users to predict soil erosion rates using two models: WEPP (Water Erosion Prediction Project) and Tillage Erosion. It incorporates various parameters such as soil type, slope, rainfall, crop cover, and tillage intensity to provide a detailed erosion prediction, allowing for both WEPP and tillage-based erosion rates to be compared side by side.

Features
1. User-Friendly Features:
Interactive Graphs: The application includes dynamic bar charts (using Chart.js) that allow users to visualize the erosion rates predicted by both models. Users can zoom, pan, and hover over data points for more detailed information.
Historical Data Upload: Users can upload historical data in CSV format to compare previous erosion records with the predicted values from the models.
Detailed Input Validation and Error Handling: The app includes robust input validation. If a user inputs incorrect values (such as negative values for rainfall), they receive an informative error message guiding them to provide proper input.
2. Advanced Erosion Models:
WEPP Model: The WEPP model simulates erosion based on slope, rainfall, crop cover, and soil erodibility factors (K and L). This model is designed to estimate water-induced soil erosion by simulating real-world conditions and the impact of different land management practices.

Tillage Erosion Model: This model predicts soil displacement caused by tillage practices. Tillage intensity and slope are key factors in this model, and users can select between different tillage techniques (e.g., conventional tillage or no-till).

3. Real-Time Weather Integration (Future Enhancement):
The app can be extended to fetch real-time weather data such as rainfall, temperature, and wind patterns from external APIs to further enhance the accuracy of the WEPP model by simulating actual weather conditions.

4. Additional Simulation Parameters:
Soil Moisture: Users can include soil moisture as an additional input parameter to simulate more accurate erosion predictions.
Multiple Soil Types: The app allows users to simulate multiple soil types within a single run, providing flexibility for heterogeneous landscapes.
Erosion Prediction Over Time: Future updates can add time-series simulation to project erosion rates over weeks, months, or years, based on evolving weather patterns and land-use changes.
5. Enhanced Visualizations (Future Updates):
Heatmaps & 3D Visualization: The app can be extended with heatmaps to show erosion susceptibility across a landscape, and 3D terrain modeling to represent topography more realistically.
Animation of Erosion Progression: An animation feature can visualize how soil erosion progresses over time, helping users see the long-term impact of different land use and management practices.
How It Works
WEPP Model Function:
The WEPP model estimates soil erosion by considering:

Slope: The percentage of slope affects water runoff and erosion.
Rainfall: The amount of rainfall influences the potential for erosion.
Crop Cover: Reduces the impact of raindrops and surface water flow.
K and L Factors: These represent the soil’s erodibility and slope length, respectively.
The WEPP model’s erosion rate is calculated using the following formula:

javascript
Copy code
erosionRate = slope * rainfall * 0.1 * (1 - cropCover / 100) * kFactor * lFactor;
Tillage Erosion Model Function:
The Tillage Erosion model simulates the effect of soil disturbance by tillage practices, where:

Tillage Intensity: Determines the level of soil movement.
Slope: Steeper slopes increase soil movement.
K and L Factors: Represent soil erodibility and slope length.
The tillage erosion rate is calculated using this formula:

javascript
Copy code
tillageErosion = tillageIntensity * slope * 0.05 * kFactor * lFactor;
Running the Models:
The user provides input values for slope, rainfall, tillage intensity, crop cover, and other parameters. The app then computes both the WEPP and tillage erosion rates and displays the results visually in a bar chart.

How to Use the App
Enter the required inputs:

Slope (%): The steepness of the terrain.
Rainfall (mm): Rainfall amount.
Crop Cover (%): The percentage of land covered by crops or vegetation.
Tillage Intensity: Rate of soil disturbance due to tillage.
K Factor (Soil Erodibility): A measure of how easily soil particles can be detached.
L Factor (Slope Length): A measure of the slope’s length.
Optional inputs:

Soil Moisture: The current moisture level in the soil.
Tillage Type: Choose between different tillage practices (e.g., no-till or conventional tillage).
Upload Historical Data: Upload a CSV file containing historical erosion data for comparison.
Click Run Models to simulate the erosion predictions.

View the results in the form of:

WEPP Erosion Rate in tons/ha/year.
Tillage Erosion Rate in tons/ha/year.
Bar Chart Visualization comparing both erosion models.
Installation Instructions
Clone the Repository:
bash
Copy code
git clone https://github.com/aphis20/Javascript_wepp.git
Navigate to the Project Directory:
bash
Copy code
cd Javascript_wepp
Open the App in Your Browser: Simply open the index.html file in your preferred web browser.
Technologies Used
HTML: For the structure of the web app.
CSS: For styling the application and making it responsive.
JavaScript: For implementing the logic of the erosion models.
Chart.js: For visualizing the results in interactive bar charts.
