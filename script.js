let outputScreen = document.getElementById("Output-screen");
        function display(num){
        outputScreen.value += num;
        }
        function calculate(){
        try{
            outputScreen.value = eval(outputScreen.value);
        } catch(Error){
            alert("invalid")
        }
        }