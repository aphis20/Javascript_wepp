// scripts.js

// Function to run WEPP and Tillage Erosion Models
function weppModel(slope, rainfall, cropCover, kFactor, lFactor, soilMoisture) {
    // Modify formula to include soil moisture and crop cover effect
    const erosionRate = slope * rainfall * 0.1 * (1 - cropCover / 100) * kFactor * lFactor * (1 - soilMoisture / 100);
    return erosionRate;
}

function tillageErosionModel(tillageIntensity, slope, kFactor, lFactor, tillageType) {
    // Modify based on tillage type: no-till or conventional
    const tillageFactor = tillageType === 'no-till' ? 0.5 : 1;
    const tillageErosion = tillageFactor * tillageIntensity * slope * 0.05 * kFactor * lFactor;
    return tillageErosion;
}

function runModels() {
    // Validate inputs
    const slope = parseFloat(document.getElementById('slope').value);
    const rainfall = parseFloat(document.getElementById('rainfall').value);
    const cropCover = parseFloat(document.getElementById('cropCover').value);
    const tillageIntensity = parseFloat(document.getElementById('tillageIntensity').value);
    const kFactor = parseFloat(document.getElementById('kFactor').value);
    const lFactor = parseFloat(document.getElementById('lFactor').value);
    const soilMoisture = parseFloat(document.getElementById('soilMoisture').value);
    const tillageType = document.getElementById('tillageType').value;

    if (!slope || !rainfall || !cropCover || !tillageIntensity || !kFactor || !lFactor || !soilMoisture) {
        document.getElementById('error-message').textContent = "Please fill in all the fields with valid values.";
        return;
    }
    
    const weppResult = weppModel(slope, rainfall, cropCover, kFactor, lFactor, soilMoisture);
    const tillageResult = tillageErosionModel(tillageIntensity, slope, kFactor, lFactor, tillageType);

    document.getElementById('weppResult').textContent = `WEPP Erosion Rate: ${weppResult.toFixed(2)} tons/ha/year`;
    document.getElementById('tillageResult').textContent = `Tillage Erosion: ${tillageResult.toFixed(2)} tons/ha/year`;

    plotResults(weppResult, tillageResult);
    loadHistoricalDataComparison();
}

// Plotting the results using Chart.js or Plotly
function plotResults(weppResult, tillageResult) {
    const ctx = document.getElementById('erosionChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['WEPP Erosion', 'Tillage Erosion'],
            datasets: [{
                label: 'Erosion (tons/ha/year)',
                data: [weppResult, tillageResult],
                backgroundColor: ['#004b23', '#70e000']
            }]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Load Historical Data Comparison
function loadHistoricalDataComparison() {
    const fileInput = document.getElementById('uploadData').files[0];
    if (fileInput) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const csvData = event.target.result;
            const historicalData = parseCSVData(csvData);
            plotHistoricalData(historicalData);
        };
        reader.readAsText(fileInput);
    }
}

function parseCSVData(csvData) {
    const rows = csvData.split("\n");
    return rows.map(row => row.split(","));
}

function plotHistoricalData(data) {
    const labels = data.map(row => row[0]); // Time series data
    const erosionData = data.map(row => parseFloat(row[1])); // Historical erosion rates

    const trace = {
        x: labels,
        y: erosionData,
        mode: 'lines',
        name: 'Historical Erosion'
    };

    Plotly.newPlot('historicalComparison', [trace], {
        title: 'Historical Erosion Data Comparison',
        xaxis: { title: 'Time' },
        yaxis: { title: 'Erosion Rate (tons/ha/year)' }
    });
}

// Example of Heatmap using Plotly
function plotHeatmap() {
    const data = [{
        z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
        type: 'heatmap'
    }];
    Plotly.newPlot('heatmap', data);
}

// Example of 3D Terrain Visualization using Plotly
function plot3DTerrain() {
    const data = [{
        z: [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]],
        type: 'surface'
    }];
    Plotly.newPlot('terrain-visualization', data);
}

document.getElementById('runModels').addEventListener('click', runModels);
