document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lookup').addEventListener('click', function() {
        var country = document.getElementById('country').value; 
        var xhr = new XMLHttpRequest(); 
        xhr.open('GET', 'world.php?country=' + country, true); 
        xhr.onload = function() { 
            if (xhr.status === 200) {
                document.getElementById('result').innerHTML = xhr.responseText; 
            } else {
                console.error("Error: " + xhr.status); 
            }
        };
        xhr.onerror = function() {
            console.error("Request failed");
        };
        xhr.send(); 
    });

    document.getElementById('lookup-cities').addEventListener('click', function() {
        var country = document.getElementById('country').value;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'world.php?country=' + country + '&lookup=cities', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                document.getElementById('result').innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript loaded and DOM ready");
    console.log(document.getElementById('lookup')); 
    console.log(document.getElementById('lookup-cities')); 
});