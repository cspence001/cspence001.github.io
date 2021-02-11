# Web_Design_Challenge

<p>The Web Design challenge exhibited in this notebook are the reference files to a GitHub pages hosted Website rendered fully at https://cspence001.github.io/Sites/Web_Design_Challenge.io/index.html .

The files in this notebook contain framework HTML and accordant CSS files used to create the dashboard and subsequent pages that display pages for visualization of relationships between weather elements referenced from a previous project plotting Weather Data from the OpenWeatherMap API. The project is located here https://github.com/cspence001/api_challenge and contains visualizations of the weather of over 500 cities and the relationships in the form of scatterplots between Temperature and Latitude, Humidity and Latitude, Cloudiness and Latitude, and Wind Speed and Latitude.

The file containments within this repository used to create a dashboard to display the analysis are as follows:</p>

<ul>
    <li> <b>Landing Page</b><p>The home page provides a short summary into the background of the implementation of the project and reason for it's design, displayed on this page is also the following four visualizations displayed on the right as clickable links leading to a further analysis of each chart. The coordinating <a href="cspence001/Web_Design_Challenge/index.html">index.html</a> and <a href="cspence001/Web_Design_Challenge/styles.css">styles.css</a> were composed using the Bootstrap Grid System to define layout and provide variatable page displays across customized breakpoints. A Bootstrap component was used for rendering the Navigation Bar that can be used to access each visualization page, the comparison page and the data page.</p></li>
    
    <li> <b>Visulization Pages</b><p>The four visualization pages provide a further analysis describing the plot and it's significance. They each can be accessed in one of two ways: From the Visualizations section of tiled plots on the Landing Page as and Visualization Pages or in the Navigation Bar within the "Plots" drop-down menu. The files for each Visualization Page are contained within the Pages folder, with file names vis1.html, vis2.html, vis3.html, and vis4.html. A link relation to the stylesheet titled vis.css is used for all plot visulization pages. They can all be found here: <a href="cspence001/Web_Design_Challenge/Pages/">index.html</a></p></li>
    
    <li> <b>Comparison Page</b><p>The Comparison Page contains all of the visualizations on the same page for comparison. It is located in the Pages Folder titled comparisons.html and it's linked to stylesheet comparisons.css<a href="cspence001/Web_Design_Challenge/Pages/">index.html</a></p></li>
    
     <li> <b>Data Page</b><p>The Data Page displays a responsive table containing the data used in the visualizations. It uses the Bootstrap Table component to render the city_data.html file located within the <a href="cspence001/Web_Design_Challenge/Resources/Assets/">Resources/Assets</a> folder. The Data Page files are in the Pages folder titled data.html and it's linked relation to it's stylesheet titled data.css.<a href="cspence001/Web_Design_Challenge/Pages/">index.html</a></p></li>

</ul>

Other components and resources located within the repository:

<ul>
    <li><b><a href="cspence001/Web_Design_Challenge/Resources/Assets/">/Resources/Assets</a></b> contains a city_data.csv file exported from previous project <a href="https://github.com/cspence001/api_challenge">here</a>. It is converted from the csv to html in the html_convert.ipynb file using Pandas and outputted to city_data.html </li>
    
    <li><b><a href="cspence001/Web_Design_Challenge/Resources/Images/">/Resources/Images</a></b> contains the four plots as .png files used for visualizations.</li>
    
<ul>
    
    
    
    
    

