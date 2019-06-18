/**
 * Sidebar JavaScript Code
 * This code was developed by Matt Stevenson, 09/06/2019   
 * All individual scripts remain property of their Copyright Holders
 * Licensed to Stefan Pollin - Portfolio
 * Version: 1.0.0
 */

// Create variable Sidebar and get sidebar Element by ID
var sidebar = document.getElementById("sidebar");
// Open the sidebar with the burger icon and display as block
// If the sidebar is current displaying, display none - Else, display as block
function openSidebar() {
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
}
// Close the sidebar with the close button - display none
function closeSidebar() {
    sidebar.style.display = "none";
}
