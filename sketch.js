let data = [
    456, 364, 395, 355, 391, 477, 603, 582, 444, 460, 436, 369, 383, 320, 327, 331, 
    327, 265, 448, 615, 530, 508
  ]; 
  
  function setup() {
    createCanvas(800, 400); // Larger canvas to fit 22 bars
    noLoop();               // Prevent continuous redraw
  }
  
  function draw() {
    background(255);        // White background
    drawBarChart(50, 350, data, 25, 5); // Call the bar chart function
    drawAxisDescriptions(); // Add axis descriptions
  }
  
  // Function to draw a bar chart
  function drawBarChart(x, y, data, barWidth, gap) {
    let maxDataValue = max(data); // Find the largest value in the data
    let chartHeight = y - 50;    // Leave some space at the top
  
    // Draw Y-axis labels
    drawYAxisLabels(x - 15, y, chartHeight, maxDataValue, 100);
  
    for (let i = 0; i < data.length; i++) {
      let barHeight = map(data[i], 0, maxDataValue, 0, chartHeight); // Scale bar height
      fill(100, 150, 255);       // Bar color
      noStroke();
      rect(x + i * (barWidth + gap), y - barHeight, barWidth, barHeight); // Draw bar
  
      // Add data labels above the bars
      fill(0);
      textAlign(CENTER, CENTER);
      text(data[i], x + i * (barWidth + gap) + barWidth / 2, y - barHeight - 10);
    }
  
    // Add axes
    stroke(0);
    line(x - 10, y, x + data.length * (barWidth + gap), y); // X-axis
    line(x - 10, y, x - 10, y - chartHeight);              // Y-axis
  }
  
  // Function to draw Y-axis labels
  function drawYAxisLabels(x, y, chartHeight, maxDataValue, step) {
    let steps = ceil(maxDataValue / step); // Number of steps on the Y-axis
    textAlign(RIGHT, CENTER);
    fill(0);
  
    for (let i = 0; i <= steps; i++) {
      let labelValue = i * step; // Current label value (e.g., 0, 100, 200, ...)
      let labelY = map(labelValue, 0, maxDataValue, y, y - chartHeight); // Map label position
      text(labelValue, x, labelY); // Draw label
      stroke(200); // Light gray grid line
      line(x + 5, labelY, width, labelY); // Optional: gridline for reference
    }
  }
  
  // Function to add axis descriptions
  function drawAxisDescriptions() {
    textAlign(CENTER, CENTER);
    fill(0);
  
    // Description for X-axis
    text("Months = X-Axis", width / 2, height - 20);
  
    // Description for Y-axis
    text("Hotspot Checkouts per Month = Y-Axis", width / 2, height - 40);
  }  