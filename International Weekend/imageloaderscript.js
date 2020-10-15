
function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }

function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("img").src = images[x];
          }

function startTimer() {
              setInterval(displayNextImage, 2000);
          }
var images = [], x = 0;

images[0] = "redfort.jpg";
images[1] = "a.jpg";
images[2] = "b.jpg";
images[3] = "c.jpg";
images[4] = "Sindhudurg1.jpg";
images[5] = "Sindhudurg2.jpg";
images[6] = "Sindhudurg3.jpg";
images[7] = "MurudJanjira1.jpg";
images[8] = "murudjanjira2.jpg";
images[9] = "MurudJanjira3.jpg";
images[10] = "Vijaydurga1.jpg";
images[11] = "Vijaydurga2.jpg";
images[12] = "Vijaydurga3.jpg";
images[13] = "Underi1.jpg";
images[14] = "Underi2.jpg";
images[15] = "Underi3.jpg";
images[16] = "MurudJanjira1.jpg";
images[17] = "murudjanjira2.jpg";
images[18] = "MurudJanjira3.jpg";
images[19] = "Vijaydurga1.jpg";
images[20] = "Vijaydurga2.jpg";
images[21] = "Vijaydurga3.jpg";
images[22] = "d.jpg";



