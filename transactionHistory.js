
function transactionpopup(elementId){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


function history(item, price, date){
    var inputArray = [];
    var Description = document.getElementById('Description');
    var amount = document.getElementById('amount');
    var cDate = document.getElementById('date');
    let expanses = {
        item: Description,
        price: amount,
        date :cDate,
      };

      for (let value of Object.values(expanses)) {
        inputArray.push(value);
      }
        
}