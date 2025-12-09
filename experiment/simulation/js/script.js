let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let canvas = document.getElementById("myCanvasNode");
let ctxNode = canvas.getContext("2d");

let controlInput = document.querySelector("#control-input-select");
let controlHidden = document.querySelector("#control-hidden-select");
let controlOutput = document.querySelector("#control-output-select");

let controlInputLabel = document.querySelector("#label-input-layer");
let controlHiddenLabel = document.querySelector("#label-hidden-layer");
let controlOutputLabel = document.querySelector("#label-output-layer");

let buttonOfInputLayerSubmitButton = document.querySelector(
  "#input-layer-submit-button"
);
let buttonOfHiddenLayerSubmitButton = document.querySelector(
  "#hidden-layer-submit-button"
);
let buttonOfOutputLayerSubmitButton = document.querySelector(
  "#output-layer-submit-button"
);

let buttonOfInputLayerNext = document.querySelector("#input-layer-button");

let buttonOfHiddenLayerNext = document.querySelector("#hidden-layer-button");
let buttonOfOutputLayerNext = document.querySelector("#output-layer-button");

const resetButtonInput = document.getElementById("resetButtonInput");
const resetButtonHidden = document.getElementById("resetButtonHidden");
const resetButtonOutput = document.getElementById("resetButtonOutput");

let bias = document.getElementById("bias");
let source = document.getElementById("source");
let destination = document.getElementById("destination");

let weight = document.getElementById("weight");

let networkTab = document.querySelector("#networkTab");
let networkTabDisabled = document.querySelector("#networkTabDisabled");

let controlFirstTab = document.querySelector("#controlFirstTab");
let controlFirstTabDisabled = document.querySelector(
  "#controlFirstTabDisabled"
);

let controlFirstDiv = document.querySelector("#controlFirstDiv");
let nodeCreation = document.querySelector("#nodeCreation");
let terminologyDiv = document.querySelector("#terminologyDiv");
let networkDiv = document.querySelector("#networkDiv");
let controlsDiv = document.querySelector("#controlsDiv");
let observationTableDiv = document.querySelector("#observationTableDiv");

let formGroupForInputSource = document.querySelector(
  "#form_group_for_input_source"
);
let formGroupForInputDestination = document.querySelector(
  "#form_group_for_input_destination"
);

let resetButton = document.querySelector("#resetButton");

let nodeone = document.querySelector("#nodeone");
let nodetwo = document.querySelector("#nodetwo");
let nodethree = document.querySelector("#nodethree");

let nodeYone = document.querySelector("#nodeYone");
let nodeYtwo = document.querySelector("#nodeYtwo");


let formthree = document.querySelector("#formthree");
let formtwo = document.querySelector("#formtwo");
let formone = document.querySelector("#formone");

let formYtwo = document.querySelector("#formYtwo");
let formYone = document.querySelector("#formYone");

let preControllersContainerId = document.querySelector(
  "#pre_controllers_container_id"
);
let controllersId = document.querySelector("#controllers_id");
let controllersBtnId = document.querySelector("#controllers-btn-id");

let enableNextButton = document.querySelector("#enable-next-button");


let enableSubmitThreeOneButton = document.querySelector("#enable-submit-3-1-button");
let enableSubmitTwoOneButton = document.querySelector("#enable-submit-2-1-button");
let enableSubmitTwoTwoButton = document.querySelector("#enable-submit-2-2-button");
let enableSubmitThreeTwoButton = document.querySelector("#enable-submit-3-2-button");


let enableComputeTab = document.querySelector("#enable-compute-tab");
let disableComputeTab = document.querySelector("#disable-compute-tab");

let enableAnalyseTab = document.querySelector("#enable-analyse-tab");
let disableAnalyseTab = document.querySelector("#disable-analyse-tab");

let observationSmallDiv = document.querySelector("#observationSmallDiv");
let calculationDiv = document.querySelector("#calculationDiv");
let lossDiv = document.querySelector("#lossDiv");

let nextButtontwoenabled = document.querySelector("#nextButtontwoenabled");
let nextButtontwodisabled = document.querySelector("#nextButtontwodisabled");

let connectSubmitButtonEnabled = document.querySelector(
  "#connectSubmitButtonEnabled"
);
let connectSubmitButtonDisabled = document.querySelector(
  "#connectSubmitButtonDisabled"
);
let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");
let para3 = document.querySelector("#para3");
let x1 = document.querySelector("#x1");
let x2 = document.querySelector("#x2");
let x3 = document.querySelector("#x3");
let h1 = document.querySelector("#h1");
let h2 = document.querySelector("#h2");
let h3 = document.querySelector("#h3");
let h4 = document.querySelector("#h4");
let y1 = document.querySelector("#y1");
let y2 = document.querySelector("#y2");
let plus = document.querySelector("#plus");
let multiply = document.querySelector("#multiply");
let plus1 = document.querySelector("#plus1");
let multiply1 = document.querySelector("#multiply1");
let plus2 = document.querySelector("#plus2");
let multiply2 = document.querySelector("#multiply2");
let plus3 = document.querySelector("#plus3");
let multiply3 = document.querySelector("#multiply3");
let ansSpan = document.querySelector("#ansSpan");
let inputGroup = document.querySelector(".input-group");

let submitButtonCompute = document.querySelector("#submitButtonCompute");
let nextButtonCompute = document.querySelector("#nextButtonCompute");
let resetButtonCompute = document.querySelector("#resetButtonCompute");

// Alert

function alerts1(icon,title,html)
{
  Swal.fire({
    html: html,
    title:title,
    icon: icon,
    customClass: {
      container: "firstContainer",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
    },
    focusConfirm: false,
    confirmButtonText: 'OK',
     allowOutsideClick: false,
    allowEscapeKey: false,
  });
}






function submitButtonOfControls() {
  const controlInputOfControlTab = controlInput.value;
  const controlHiddenOfControlTab = controlHidden.value;
  const controlOutputOfControlTab = controlOutput.value;

  if(controlInputOfControlTab == "0" && controlHiddenOfControlTab== "0" && controlOutputOfControlTab == "0")
  {
     alerts1('error','First select no. of nodes required at each layer.','');
  }
  if(controlInputOfControlTab == "0" || controlHiddenOfControlTab == "0" || controlOutputOfControlTab == "0")
  {
    if(controlInputOfControlTab == "0" && controlHiddenOfControlTab== "0")
    {
      alerts1('error','First select no. of Input & Output Layer nodes.','');
      return;
    }

    else if(controlHiddenOfControlTab== "0" && controlOutputOfControlTab == "0")
    {
      alerts1('error','First select no. of Output & Hidden Layer nodes.','');
      return;
    }

    else if(controlInputOfControlTab == "0" && controlOutputOfControlTab == "0")
    {
      alerts1('error','First select no. of Input & Output Layer nodes.','');
      return;
    }

    else if(controlInputOfControlTab == "0")
    {
      alerts1('error','First select no. of Input Layer nodes.','');
       return;
    }
     
    else if(controlHiddenOfControlTab == "0")
    {
      alerts1('error','First select no. of Hidden Layer nodes.','');
       return;
    }

    else if(controlOutputOfControlTab == "0")
    {
      alerts1('error','First select no. of Output Layer nodes.','');
      return;
    }
  }


  if (controlInputOfControlTab == "2") {
    ctxNode.beginPath();
    ctxNode.roundRect(20, 80, 100, 160, [30]);
    ctxNode.fillStyle = "#216698";
    ctxNode.strokeStyle = "#216698";
    ctxNode.fill();
    ctxNode.stroke();

    drawCircleForNode(70, 120, 20, "#87CEEB", "white");
    drawCircleForNode(70, 190, 20, "#87CEEB", "white");

    drawTextForNode(25, 205, "X₂", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(25, 130, "X₁", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(25,265,"Input Layer","19px 'Times New Roman', Times, serif"," white");
 
  } else if (controlInputOfControlTab == "3") {
    ctxNode.beginPath();
    ctxNode.roundRect(20, 45, 100, 220, [30]);
    ctxNode.fillStyle = "#216698";
    ctxNode.strokeStyle = "#216698";
    ctxNode.fill();
    ctxNode.stroke();

    drawCircleForNode(70, 85, 20, "#87CEEB", "white");
    drawCircleForNode(70, 150, 20, "#87CEEB", "white");
    drawCircleForNode(70, 215, 20, "#87CEEB", "white");

    drawTextForNode(25, 230, "X₃", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(25, 170, "X₂", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(25, 95, "X₁", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(25,295,"Input Layer","19px 'Times New Roman', Times, serif"," white");   
  } 
    

  if (controlHiddenOfControlTab == "3") {
    ctxNode.beginPath();
    ctxNode.roundRect(180, 45, 100, 220, [30]);
    ctxNode.fillStyle = "#3D5F74";
    ctxNode.strokeStyle = "#3D5F74";
    ctxNode.fill();
    ctxNode.stroke();

    drawCircleForNode(230, 85, 20, "#ffdbe9", "white");
    drawCircleForNode(230, 150, 20, "#ffdbe9", "white");
    drawCircleForNode(230, 215, 20, "#ffdbe9", "white");

    drawTextForNode(255, 235, "H₃", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(255, 170, "H₂", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(255, 105, "H₁", "21px 'Times New Roman', Times, serif", " black");

    drawTextForNode(180,295,"Hidden Layer","19px 'Times New Roman', Times, serif"," white");
  } 
  else if (controlHiddenOfControlTab == "4") {
    ctxNode.beginPath();
    ctxNode.roundRect(180, 10, 100, 270, [30]);
    ctxNode.fillStyle = "#3D5F74";
    ctxNode.strokeStyle = "#3D5F74";
    ctxNode.fill();
    ctxNode.stroke();

    drawCircleForNode(230, 40, 20, "#ffdbe9", "white");
    drawCircleForNode(230, 110, 20, "#ffdbe9", "white");
    drawCircleForNode(230, 180, 20, "#ffdbe9", "white");
    drawCircleForNode(230, 250, 20, "#ffdbe9", "white");

    drawTextForNode(255, 260, "H₄", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(255, 190, "H₃", "21px 'Times New Roman', Times, serif", " black");
   drawTextForNode(255, 120, "H₂", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(255, 50, "H₁", "21px 'Times New Roman', Times, serif", " black");

    drawTextForNode(180,305,"Hidden Layer","19px 'Times New Roman', Times, serif"," white");

  } 


  if (controlOutputOfControlTab == "1") {
    ctxNode.beginPath();
    ctxNode.roundRect(340, 100, 100, 110, [30]);
    ctxNode.fillStyle = "#80CDC0";
    ctxNode.strokeStyle = "#80CDC0";
    ctxNode.fill();
    ctxNode.stroke();

    drawCircleForNode(390, 150, 20, "yellow", "white");
    drawTextForNode(410, 175, "Y₁", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(340,240,"Output Layer","19px 'Times New Roman', Times, serif"," white");
    
  } else if (controlOutputOfControlTab == "2") {
    ctxNode.beginPath();
    ctxNode.roundRect(340, 80, 100, 160, [30]);
    ctxNode.fillStyle = "#80CDC0";
    ctxNode.strokeStyle = "#80CDC0";
    ctxNode.fill();
    ctxNode.stroke();

    drawCircleForNode(390, 115, 20, "yellow", "white");
    drawCircleForNode(390, 195, 20, "yellow", "white");

    drawTextForNode(410, 135, "Y₁", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(410, 220, "Y₂", "21px 'Times New Roman', Times, serif", " black");
    drawTextForNode(340,270,"Output Layer","19px 'Times New Roman', Times, serif"," white");
  } 

  if (controlOutputOfControlTab !== "0" && controlOutputOfControlTab !== "0" && controlHiddenOfControlTab !== "0") {
    controlInput.disabled=true
    controlHidden.disabled=true
    controlOutput.disabled=true
    para1.style.display = "block";
    para2.style.display = "block";
    para3.style.display = "block";
    buttonOfInputLayerSubmitButton.disabled = true;
    buttonOfOutputLayerNext.disabled = false;
    document.getElementById('resetButtonInput').disabled=false;
    alerts1('success','The number of nodes for each layer of the network has been chosen.','Now click on <b style="color:#FF6600">NEXT</b> button to set the input & output values.');
  }

}

function resetInput() {
  document.getElementById('resetButtonInput').disabled=true;
  if (controlInputLabel.style.display != "none" && controlHiddenLabel.style.display != "none" && controlOutputLabel.style.display != "none") {
    
    ctxNode.clearRect(18, 38, 150, 260);
    ctx.clearRect(350, 50, 150, 260);
    controlInput.selectedIndex = 0;
    buttonOfInputLayerSubmitButton.disabled = false;

    ctxNode.clearRect(177, 8, 140, 320);
    controlHidden.selectedIndex = 0;

    ctxNode.clearRect(332, 60, 140, 220);
    controlOutput.selectedIndex = 0;

    para1.style.display = "none";
    para2.style.display = "none";
    para3.style.display = "none";

    buttonOfOutputLayerNext.disabled = true;
    buttonOfOutputLayerNext.style.display = "block";

    controlInput.disabled=false
    controlHidden.disabled=false
    controlOutput.disabled=false

  }
}


function nextLayerRedirectButton() {
  networkDiv.style.display = "block";
  controlsDiv.style.display = "block";
  observationTableDiv.style.display = "block";
  controlFirstDiv.style.display = "none";
  nodeCreation.style.display = "none";
  terminologyDiv.style.display = "none";
  networkTabDisabled.style.backgroundColor = "#e0e0e0";
  networkTabDisabled.style.color = "black";

  networkTabDisabled.style.display = "flex";
  networkTab.style.display = "none";
  controlFirstTab.style.backgroundColor = "#16696e";
  networkTab.style.color = "black";
  controlFirstTabDisabled.style.display = "flex";
  controlFirstTab.style.display = "none";

  arrayFunctionForSelect();
  arrayFuntion(); //draw nodes
}

function arrayFunctionForSelect() {
  var arrayForNodeForSelect = [
    controlInput.value,
    controlHidden.value,
    controlOutput.value,
  ];

  switch (JSON.stringify(arrayForNodeForSelect)) {
    case JSON.stringify(["3", "4", "2"]):
      nullSelectAppend();
      // Options for the source select
      var sourceOptions = [
        { value: "X₁", text: "X₁" },
        { value: "X₂", text: "X₂" },
        { value: "X₃", text: "X₃" },
      ];

      // Options for the destination select
      var destinationOptions = [
        { value: "H₁", text: "H₁" },
        { value: "H₂", text: "H₂" },
        { value: "H₃", text: "H₃" },
        { value: "H₄", text: "H₄" },
      ];

      // Append options to the source select
      sourceOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        source.add(newOption);
      });

      // Append options to the destination select
      destinationOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        destination.add(newOption);
      });

      break;

    case JSON.stringify(["3", "4", "1"]):
      nullSelectAppend();
      var sourceOptions = [
        { value: "X₁", text: "X₁" },
        { value: "X₂", text: "X₂" },
        { value: "X₃", text: "X₃" },
      ];

      // Options for the destination select
      var destinationOptions = [
        { value: "H₁", text: "H₁" },
        { value: "H₂", text: "H₂" },
        { value: "H₃", text: "H₃" },
        { value: "H₄", text: "H₄" },
      ];

      // Append options to the source select
      sourceOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        source.add(newOption);
      });

      // Append options to the destination select
      destinationOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        destination.add(newOption);
      });

      break;

    case JSON.stringify(["3", "3", "1"]):
      nullSelectAppend();
      var sourceOptions = [
        { value: "X₁", text: "X₁" },
        { value: "X₂", text: "X₂" },
        { value: "X₃", text: "X₃" },
      ];

      // Options for the destination select
      var destinationOptions = [
        { value: "H₁", text: "H₁" },
        { value: "H₂", text: "H₂" },
        { value: "H₃", text: "H₃" },
      ];

      // Append options to the source select
      sourceOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        source.add(newOption);
      });

      // Append options to the destination select
      destinationOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        destination.add(newOption);
      });

      break;

    case JSON.stringify(["3", "3", "2"]):
      nullSelectAppend();
      var sourceOptions = [
        { value: "X₁", text: "X₁" },
        { value: "X₂", text: "X₂" },
        { value: "X₃", text: "X₃" },
      ];

      // Options for the destination select
      var destinationOptions = [
        { value: "H₁", text: "H₁" },
        { value: "H₂", text: "H₂" },
        { value: "H₃", text: "H₃" },
      ];

      // Append options to the source select
      sourceOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        source.add(newOption);
      });

      // Append options to the destination select
      destinationOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        destination.add(newOption);
      });

      break;

    case JSON.stringify(["2", "4", "1"]):
      nullSelectAppend();
      var sourceOptions = [
        { value: "X₁", text: "X₁" },
        { value: "X₂", text: "X₂" },
      ];

      // Options for the destination select
      var destinationOptions = [
        { value: "H₁", text: "H₁" },
        { value: "H₂", text: "H₂" },
        { value: "H₃", text: "H₃" },
        { value: "H₄", text: "H₄" },
      ];

      // Append options to the source select
      sourceOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        source.add(newOption);
      });

      // Append options to the destination select
      destinationOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        destination.add(newOption);
      });

      break;

    case JSON.stringify(["2", "4", "2"]):
      nullSelectAppend();
      var sourceOptions = [
        { value: "X₁", text: "X₁" },
        { value: "X₂", text: "X₂" },
      ];

      // Options for the destination select
      var destinationOptions = [
        { value: "H₁", text: "H₁" },
        { value: "H₂", text: "H₂" },
        { value: "H₃", text: "H₃" },
        { value: "H₄", text: "H₄" },
      ];

      // Append options to the source select
      sourceOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        source.add(newOption);
      });

      // Append options to the destination select
      destinationOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        destination.add(newOption);
      });

      break;

    case JSON.stringify(["2", "3", "1"]):
      nullSelectAppend();
      var sourceOptions = [
        { value: "X₁", text: "X₁" },
        { value: "X₂", text: "X₂" },
      ];

      // Options for the destination select
      var destinationOptions = [
        { value: "H₁", text: "H₁" },
        { value: "H₂", text: "H₂" },
        { value: "H₃", text: "H₃" },
      ];

      // Append options to the source select
      sourceOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        source.add(newOption);
      });

      // Append options to the destination select
      destinationOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        destination.add(newOption);
      });

      break;

    case JSON.stringify(["2", "3", "2"]):
      nullSelectAppend();
      var sourceOptions = [
        { value: "X₁", text: "X₁" },
        { value: "X₂", text: "X₂" },
      ];

      // Options for the destination select
      var destinationOptions = [
        { value: "H₁", text: "H₁" },
        { value: "H₂", text: "H₂" },
        { value: "H₃", text: "H₃" },
      ];

      // Append options to the source select
      sourceOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        source.add(newOption);
      });

      // Append options to the destination select
      destinationOptions.forEach(function (option) {
        var newOption = new Option(option.text, option.value);
        destination.add(newOption);
      });

      break;

    default:
      break;
  }
}

var selectedValuesForThreeOneValues = {};
var selectedValuesForThreeTwoValues = {};

var selectedValuesForTwoTwoValues = {};
var selectedValuesForTwoOneValues = {};


function precontrollerSubmitThreeOne() {
  const arrayForPreController = [
    controlInput.value,
    controlHidden.value,
    controlOutput.value,
  ];

  selectedValuesForThreeOneValues = {
    X1: nodeone.value,
    X2: nodetwo.value,
    X3: nodethree.value,
    Y1: nodeYone.value,
  };

  function setValuesToNull() {
    nodeone.value = "NULL";
    nodetwo.value = "NULL";
    nodethree.value = "NULL";
    nodeYone.value = "NULL"
  }

  // Check if all values are filled and show the message
  if (
    nodeone.value !== "NULL" &&
    nodetwo.value !== "NULL" &&
    nodethree.value !== "NULL" &&
    nodeYone.value !== "NULL"
  ) {
    alerts1('info','','Now click on <b style="color:#FF6600">NEXT</b> button.');
    document.getElementById('resetInput').disabled=false;
    enableSubmitThreeOneButton.disabled = true;
    let x=document.getElementsByClassName('controller-inputs-first')
    for (var i = 0; i < x.length; i++) {
      x[i].disabled = true; 
  }
  }

  if (
    nodeone.value === "NULL" ||
    nodetwo.value === "NULL" ||
    nodethree.value === "NULL" ||
    nodeYone.value === "NULL"
  ) {
    Swal.fire({
      title:'Missing value!!!',
      html: "Select the value for all the Input & Output nodes.",
      icon: "info",
    
      focusConfirm: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
      confirmButtonAriaLabel: "Thumbs up, Ok",
      customClass: {
        container: "firstContainer",
        popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        enableNextButton.disabled=true;
        enableSubmitThreeOneButton.disabled = false;
      }
    });
  } else {
    const nodeOneValue = parseInt(nodeone.value);
    const nodeTwoValue = parseInt(nodetwo.value);
    const nodeThreeValue = parseInt(nodethree.value);
    const nodeYoneValue = parseInt(nodeYone.value);

    if (nodeOneValue === 1 || nodeOneValue === -1) {
      const valueToDraw = nodeOneValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
       

        case JSON.stringify(["3", "4", "1"]):
          drawText(38, 75, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();

          break;

        case JSON.stringify(["3", "3", "1"]):
          drawText(38, 75, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();

          break;

               
        default:
          break;
      }
    } else if (nodeOneValue !== 0) {
      console.log("error");
    }

    if (nodeTwoValue === 1 || nodeTwoValue === -1) {
      const valueToDraw = nodeTwoValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        

        case JSON.stringify(["3", "4", "1"]):
          drawText(38, 144, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();

          break;

        
        case JSON.stringify(["3", "3", "1"]):
          drawText(38, 144, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();

          break;

       

        default:
          break;
      }
    } else if (nodeTwoValue !== 0) {
      console.log("error");
    }

    if (nodeThreeValue === 1 || nodeThreeValue === -1) {
      const valueToDraw = nodeThreeValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        

        case JSON.stringify(["3", "4", "1"]):
          drawText(38, 213, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();
          break;

        case JSON.stringify(["3", "3", "1"]):
          drawText(38, 213, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();
          break;

        
        default:
          break;
      }
    } else if (nodeThreeValue !== 0) {
      console.log("error");
    }

    if (nodeYoneValue === 1 || nodeYoneValue === -1) {
      const valueToDraw = nodeYoneValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        
        case JSON.stringify(["3", "4", "1"]):
          drawText(410, 140, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();
          break;

        case JSON.stringify(["3", "3", "1"]):
          drawText(410, 140, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();
          break;

        default:
          break;
      }
    } else if (nodeThreeValue !== 0) {
      console.log("error");
    }
  }

  console.log("Selected Values Array:", selectedValuesForThreeOneValues);
 
  enableNextButton.disabled=false;
  enableSubmitThreeOneButton.disabled = true;
}

function precontrollerSubmitThreeTwo() {
  const arrayForPreController = [
    controlInput.value,
    controlHidden.value,
    controlOutput.value,
  ];

  selectedValuesForThreeTwoValues = {
    X1: nodeone.value,
    X2: nodetwo.value,
    X3: nodethree.value,
    Y1: nodeYone.value,
    Y2: nodeYtwo.value,
  };

  function setValuesToNull() {
    nodeone.value = "NULL";
    nodetwo.value = "NULL";
    nodethree.value = "NULL";
    nodeYone.value = "NULL";
    nodeYtwo.value = "NULL";
  }

  // Check if all values are filled and show the message
  if (
    nodeone.value !== "NULL" &&
    nodetwo.value !== "NULL" &&
    nodethree.value !== "NULL" &&
    nodeYone.value !== "NULL" &&
    nodeYtwo.value !== "NULL"
  ) {
    alerts1('info','','Now click on <b style="color:#FF6600">NEXT</b> button.');
    document.getElementById('resetInput').disabled=false;
    let x=document.getElementsByClassName('controller-inputs-first')
    for (var i = 0; i < x.length; i++) {
      x[i].disabled = true; 
  }
    enableSubmitThreeTwoButton.disabled = true;
  }

  if (
    nodeone.value === "NULL" ||
    nodetwo.value === "NULL" ||
    nodethree.value === "NULL" ||
    nodeYone.value === "NULL" ||
    nodeYtwo.value === "NULL"
  ) {
    Swal.fire({
      title:'Missing value!!!',
      html: "Select the value for all the Input & Output nodes.",
      icon: "info",
    
      focusConfirm: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
      confirmButtonAriaLabel: "Thumbs up, Ok",
      customClass: {
        container: "firstContainer",
        popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        enableNextButton.disabled=true;
        enableSubmitThreeTwoButton.disabled = false;
      }
    });
  } else {
    const nodeOneValue = parseInt(nodeone.value);
    const nodeTwoValue = parseInt(nodetwo.value);
    const nodeThreeValue = parseInt(nodethree.value);
    const nodeYoneValue = parseInt(nodeYone.value);
    const nodeYtwoValue = parseInt(nodeYtwo.value);

    if (nodeOneValue === 1 || nodeOneValue === -1) {
      const valueToDraw = nodeOneValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        case JSON.stringify(["3", "4", "2"]):
          drawText(38, 75, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;

      
        case JSON.stringify(["3", "3", "2"]):
          drawText(38, 75, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();

          break;

       
        default:
          break;
      }
    } else if (nodeOneValue !== 0) {
      console.log("error");
    }

    if (nodeTwoValue === 1 || nodeTwoValue === -1) {
      const valueToDraw = nodeTwoValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        case JSON.stringify(["3", "4", "2"]):
          drawText(38, 144, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();

          break;

        
        case JSON.stringify(["3", "3", "2"]):
          drawText(38, 144, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();

          break;

       

        default:
          break;
      }
    } else if (nodeTwoValue !== 0) {
      console.log("error");
    }

    if (nodeThreeValue === 1 || nodeThreeValue === -1) {
      const valueToDraw = nodeThreeValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        case JSON.stringify(["3", "4", "2"]):
          drawText(38, 213, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();

          break;

        case JSON.stringify(["3", "3", "2"]):
          drawText(38, 213, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();
          break;

        default:
          break;
      }
    } else if (nodeThreeValue !== 0) {
      console.log("error");
    }

    if (nodeYoneValue === 1 || nodeYoneValue === -1) {
      const valueToDraw = nodeYoneValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        case JSON.stringify(["3", "4", "2"]):
          drawText(400, 100, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();

          break;

        case JSON.stringify(["3", "3", "2"]):
          drawText(405, 100, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();
          break;

        default:
          break;
      }
    } else if (nodeThreeValue !== 0) {
      console.log("error");
    }

    if (nodeYtwoValue === 1 || nodeYtwoValue === -1) {
      const valueToDraw = nodeYtwoValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        case JSON.stringify(["3", "4", "2"]):
          drawText(400, 180, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();

          break;

        case JSON.stringify(["3", "3", "2"]):
          drawText(405, 170, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();
          break;

        default:
          break;
      }
    } else if (nodeThreeValue !== 0) {
      console.log("error");
    }
  }

  console.log("Selected Values Array:", selectedValuesForThreeTwoValues);
 
  enableNextButton.disabled=false;
  enableSubmitThreeTwoButton.disabled = true;
}

function precontrollerSubmitTwoOne() {
  const arrayForPreController = [
    controlInput.value,
    controlHidden.value,
    controlOutput.value,
  ];

  selectedValuesForTwoOneValues = {
    X1: nodeone.value,
    X2: nodetwo.value,
    Y1: nodeYone.value,
  };

  function setValuesToNull() {
    nodeone.value = "NULL";
    nodetwo.value = "NULL";
    nodeYone.value="NULL";
  }

  // Check if both values are filled and show the message
  if (nodeone.value !== "NULL" && nodetwo.value !== "NULL" && nodeYone.value !=="NULL") {
    alerts1('info','','Now click on <b style="color:#FF6600">NEXT</b> button.');
    document.getElementById('resetInput').disabled=false;
    enableSubmitTwoOneButton.disabled = true;
    let x=document.getElementsByClassName('controller-inputs-first')
    for (var i = 0; i < x.length; i++) {
      x[i].disabled = true; 
  }
  }

  if (nodeone.value === "NULL" || nodetwo.value === "NULL" || nodeYone.value ==="NULL") {
 
    Swal.fire({

      title: "Missing Value!!!",
      icon: "info",
      html:'Please select the value for all X<sub>1</sub>, X<sub>2</sub> and Y<sub>1</sub>.',
      focusConfirm: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
      confirmButtonAriaLabel: "Thumbs up, Ok",
      customClass: {
        container: "firstContainer",
        popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        enableNextButton.disabled=true;
      }
    });
  } else {
    const nodeOneValue = parseInt(nodeone.value);
    const nodeTwoValue = parseInt(nodetwo.value);
    const nodeYOneValue = parseInt(nodeYone.value);

    if (nodeOneValue === 1 || nodeOneValue === -1) {
      const valueToDraw = nodeOneValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {

        case JSON.stringify(["2", "4", "1"]):
          drawText(38, 105, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();

          break;

        case JSON.stringify(["2", "3", "1"]):
          drawText(38, 105, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();

          break;


        default:
          break;
      }
    } else if (nodeOneValue !== 0) {
      console.log("error");
    }

    if (nodeTwoValue === 1 || nodeTwoValue === -1) {
      const valueToDraw = nodeTwoValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {


        case JSON.stringify(["2", "4", "1"]):
          drawText(38, 184, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;

        case JSON.stringify(["2", "3", "1"]):
          drawText(38, 174, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;

        default:
          break;
      }
    } else if (nodeTwoValue !== 0) {
      console.log("error");
    }

    if (nodeYOneValue === 1 || nodeYOneValue === -1) {
      const valueToDraw = nodeYOneValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {

        case JSON.stringify(["2", "4", "1"]):
          drawText(415, 135, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;

        case JSON.stringify(["2", "3", "1"]):
          drawText(400, 140, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;


        default:
          break;
      }
    } else if (nodeTwoValue !== 0) {
      console.log("error");
    }
   
  }

 
  console.log("Selected Values Array:", selectedValuesForTwoOneValues);
  enableNextButton.disabled=false;

  enableSubmitTwoOneButton.disabled = true;
}

function precontrollerSubmitTwoTwo() {
  const arrayForPreController = [
    controlInput.value,
    controlHidden.value,
    controlOutput.value,
  ];

  selectedValuesForTwoTwoValues = {
    X1: nodeone.value,
    X2: nodetwo.value,
    Y1: nodeYone.value,
    Y2: nodeYtwo.value,
  };

  function setValuesToNull() {
    nodeone.value = "NULL";
    nodetwo.value = "NULL";
    nodeYone.value="NULL";
    nodeYtwo.value="NULL";
  }

  // Check if both values are filled and show the message
  if (nodeone.value !== "NULL" && nodetwo.value !== "NULL" && nodeYone.value !=="NULL" && nodeYtwo.value !=="NULL") {
    alerts1('info','','Now click on <b style="color:#FF6600">NEXT</b> button.');
    document.getElementById('resetInput').disabled=false;
    enableSubmitTwoTwoButton.disabled = true;
    let x=document.getElementsByClassName('controller-inputs-first')
    for (var i = 0; i < x.length; i++) {
      x[i].disabled = true; 
  }
  }

  if (nodeone.value === "NULL" || nodetwo.value === "NULL" || nodeYone.value ==="NULL" || nodeYtwo.value ==="NULL") {
 
    Swal.fire({

      title: "Missing Value!!!",
      icon: "info",
      html:'Please select the value for all X<sub>1</sub>, X<sub>2</sub>, Y<sub>1</sub> and Y<sub>2</sub>.',
      focusConfirm: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
      confirmButtonAriaLabel: "Thumbs up, Ok",
      customClass: {
        container: "firstContainer",
        popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        enableNextButton.disabled=true;

        enableSubmitTwoTwoButton.disabled = false;
      }
    });
  } else {
    const nodeOneValue = parseInt(nodeone.value);
    const nodeTwoValue = parseInt(nodetwo.value);
    const nodeYOneValue = parseInt(nodeYone.value);
    const nodeYtwoValue = parseInt(nodeYtwo.value);

    if (nodeOneValue === 1 || nodeOneValue === -1) {
      const valueToDraw = nodeOneValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        case JSON.stringify(["2", "4", "2"]):
          drawText(38, 105, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");

          setValuesToNull();

          break;


        case JSON.stringify(["2", "3", "2"]):
          drawText(38, 105, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();

          break;

        default:
          break;
      }
    } else if (nodeOneValue !== 0) {
      console.log("error");
    }

    if (nodeTwoValue === 1 || nodeTwoValue === -1) {
      const valueToDraw = nodeTwoValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        case JSON.stringify(["2", "4", "2"]):
          drawText(38, 184, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;

        case JSON.stringify(["2", "3", "2"]):
          drawText(38, 174, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;

        default:
          break;
      }
    } else if (nodeTwoValue !== 0) {
      console.log("error");
    }

    if (nodeYOneValue === 1 || nodeYOneValue === -1) {
      const valueToDraw = nodeYOneValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        case JSON.stringify(["2", "4", "2"]):
          drawText(400, 100, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;

        case JSON.stringify(["2", "3", "2"]):
          drawText(410, 100, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;

        default:
          break;
      }
    } else if (nodeTwoValue !== 0) {
      console.log("error");
    }
    if (nodeYtwoValue === 1 || nodeYtwoValue === -1) {
      const valueToDraw = nodeYtwoValue === 1 ? "1" : "-1";

      switch (JSON.stringify(arrayForPreController)) {
        case JSON.stringify(["2", "4", "2"]):
          drawText(400, 180, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;

        case JSON.stringify(["2", "3", "2"]):
          drawText(410, 170, valueToDraw, "22px 'Times New Roman', Times, serif", "#FF6600");
          setValuesToNull();
          break;

        default:
          break;
      }
    } else if (nodeTwoValue !== 0) {
      console.log("error");
    }
  }

 
  console.log("Selected Values Array:", selectedValuesForTwoTwoValues);
  enableNextButton.disabled=false;
  enableSubmitTwoTwoButton.disabled = true;
}




function arrayFuntion() {
  // Array

  var arrayForNode = [
    controlInput.value,
    controlHidden.value,
    controlOutput.value,
  ];

  switch (JSON.stringify(arrayForNode)) {
    // ARRAY 1

    case JSON.stringify(["3", "4", "2"]):
      //  input hidden and output layer nodes and arrows
      formone.style.marginTop = "-25px";
      let elementss=document.getElementsByClassName('labels');
      for (var i = 0; i < elementss.length; i++) {
        elementss[i].style.fontSize = "20px"; // Change font size to 20px
    }

      drawCircle(80, 65, 20, "#87CEEB", "white");
      drawText(68, 75, "X₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 135, 20, "#87CEEB", "white");
      drawText(68, 144, "X₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 205, 20, "#87CEEB", "white");
      drawText(68, 213, "X₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 25, 20, "#ffdbe9", "white");
      drawText(220, 35, "H₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 95, 20, "#ffdbe9", "white");
      drawText(220, 105, "H₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 170, 20, "#ffdbe9", "white");
      drawText(220, 177, "H₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 245, 20, "#ffdbe9", "white");
      drawText(220, 252, "H₄", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(370, 95, 20, "#d9c21d", "white");
      drawText(362, 102, "Y₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(370, 175, 20, "#d9c21d", "white");
      drawText(362, 182, "Y₂", "22px 'Times New Roman', Times, serif", "black");

      enableSubmitThreeTwoButton.style.display = "block";
      multiply.style.marginTop = "120px";
      plus3.style.marginTop = "120px";
      w3.style.marginTop = "120px";
      multiply.style.marginLeft = "-129px";
      multiply.style.marginRight = "9px";
      inputGroup.style.paddingTop = "3px";
      document.getElementById("biasSpan").style.marginTop = "120px";
      w1.placeholder = "W₁₁";
      w2.placeholder = "W₂₁";
      w3.placeholder = "W₃₁";

      break;

    // ARRAY 2

    case JSON.stringify(["3", "4", "1"]):
      //  input hidden and output layer nodes and arrows
      formone.style.marginTop = "-15px";
      formYtwo.style.display = "none";

      drawCircle(80, 65, 20, "#87CEEB", "white");
      drawText(68, 75, "X₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 135, 20, "#87CEEB", "white");
      drawText(68, 144, "X₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 205, 20, "#87CEEB", "white");
      drawText(68, 213, "X₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 25, 20, "#ffdbe9", "white");
      drawText(220, 35, "H₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 95, 20, "#ffdbe9", "white");
      drawText(220, 105, "H₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 170, 20, "#ffdbe9", "white");
      drawText(220, 177, "H₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 245, 20, "#ffdbe9", "white");
      drawText(220, 252, "H₄", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(385, 130, 20, "#d9c21d", "white");
      drawText(377, 137, "Y₁", "22px 'Times New Roman', Times, serif", "black");

      enableSubmitThreeOneButton.style.display = "block";
      multiply.style.marginTop = "120px";
      plus3.style.marginTop = "120px";
      w3.style.marginTop = "120px";
      multiply.style.marginLeft = "-129px";
      multiply.style.marginRight = "9px";
      inputGroup.style.paddingTop = "3px";

      document.getElementById("biasSpan").style.marginTop = "120px";
      w1.placeholder = "W₁₁";
      w2.placeholder = "W₂₁";
      w3.placeholder = "W₃₁";

      break;

    // ARRAY 3

    case JSON.stringify(["3", "3", "1"]):
      //  input hidden and output layer nodes and arrows
      formone.style.marginTop = "-15px";
      formYtwo.style.display = "none";
      drawCircle(80, 65, 20, "#87CEEB", "white");
      drawText(68, 75, "X₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 135, 20, "#87CEEB", "white");
      drawText(68, 144, "X₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 205, 20, "#87CEEB", "white");
      drawText(68, 213, "X₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 50, 20, "#ffdbe9", "white");
      drawText(220, 60, "H₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 135, 20, "#ffdbe9", "white");
      drawText(220, 145, "H₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 225, 20, "#ffdbe9", "white");
      drawText(220, 232, "H₃", "22px 'Times New Roman', Times, serif", "black");
  
      drawCircle(370, 135, 20, "#d9c21d", "white");
      drawText(362, 142, "Y₁", "22px 'Times New Roman', Times, serif", "black");

      enableSubmitThreeOneButton.style.display = "block";
      multiply.style.marginTop = "120px";
      plus3.style.marginTop = "120px";
      w3.style.marginTop = "120px";
      multiply.style.marginLeft = "-129px";
      multiply.style.marginRight = "9px";
      inputGroup.style.paddingTop = "3px";
      document.getElementById("biasSpan").style.marginTop = "120px";
      w1.placeholder = "W₁₁";
      w2.placeholder = "W₂₁";
      w3.placeholder = "W₃₁";

      break;

    // ARRAY 4

    case JSON.stringify(["3", "3", "2"]):
      //  input hidden and output layer nodes and arrows

      formone.style.marginTop = "-25px";
      let elements=document.getElementsByClassName('labels');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = "20px"; // Change font size to 20px
    }

      
      drawCircle(80, 65, 20, "#87CEEB", "white");
      drawText(68, 75, "X₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 135, 20, "#87CEEB", "white");
      drawText(68, 144, "X₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 205, 20, "#87CEEB", "white");
      drawText(68, 213, "X₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 50, 20, "#ffdbe9", "white");
      drawText(220, 60, "H₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 135, 20, "#ffdbe9", "white");
      drawText(220, 145, "H₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 225, 20, "#ffdbe9", "white");
      drawText(220, 232, "H₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(380, 95, 20, "#d9c21d", "white");
      drawText(372, 102, "Y₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(380, 165, 20, "#d9c21d", "white");
      drawText(372, 172, "Y₂", "22px 'Times New Roman', Times, serif", "black");

      enableSubmitThreeTwoButton.style.display = "block";
      multiply.style.marginTop = "120px";
      plus3.style.marginTop = "120px";
      w3.style.marginTop = "120px";
      multiply.style.marginLeft = "-129px";
      multiply.style.marginRight = "9px";
      inputGroup.style.paddingTop = "3px";
      document.getElementById("biasSpan").style.marginTop = "120px";
      w1.placeholder = "W₁₁";
      w2.placeholder = "W₂₁";
      w3.placeholder = "W₃₁";

      break;

    // ARRAY 5

    case JSON.stringify(["2", "4", "1"]):
      //  input hidden and output layer nodes and arrows
      formthree.style.display = "none";
      formYtwo.style.display = "none";
      formone.style.marginTop = "10px";

      drawCircle(80, 95, 20, "#87CEEB", "white");
      drawText(68, 105, "X₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 175, 20, "#87CEEB", "white");
      drawText(68, 184, "X₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 25, 20, "#ffdbe9", "white");
      drawText(220, 35, "H₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 95, 20, "#ffdbe9", "white");
      drawText(220, 105, "H₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 170, 20, "#ffdbe9", "white");
      drawText(220, 177, "H₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 245, 20, "#ffdbe9", "white");
      drawText(220, 252, "H₄", "22px 'Times New Roman', Times, serif", "black");


      drawCircle(385, 130, 20, "#d9c21d", "white");
      drawText(377, 137, "Y₁", "22px 'Times New Roman', Times, serif", "black");

      enableSubmitTwoOneButton.style.display = "block";
      x3.style.display = "none";
      w3.style.display = "none";
      plus.style.display = "none";
      multiply.style.display = "none";
      w1.placeholder = "W₁₁";
      w2.placeholder = "W₂₁";

      break;

    // ARRAY 6

    case JSON.stringify(["2", "4", "2"]):
      //  input hidden and output layer nodes and arrows

      formthree.style.display = "none";
      formone.style.marginTop = "-20px";

      drawCircle(80, 95, 20, "#87CEEB", "white");
      drawText(68, 105, "X₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 175, 20, "#87CEEB", "white");
      drawText(68, 184, "X₂", "22px 'Times New Roman', Times, serif", "black");


     drawCircle(230, 25, 20, "#ffdbe9", "white");
      drawText(220, 35, "H₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 95, 20, "#ffdbe9", "white");
      drawText(220, 105, "H₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 170, 20, "#ffdbe9", "white");
      drawText(220, 177, "H₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 245, 20, "#ffdbe9", "white");
      drawText(220, 252, "H₄", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(370, 95, 20, "#d9c21d", "white");
      drawText(362, 102, "Y₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(370, 175, 20, "#d9c21d", "white");
      drawText(362, 182, "Y₂", "22px 'Times New Roman', Times, serif", "black");

      enableSubmitTwoTwoButton.style.display = "block";
      x3.style.display = "none";
      w3.style.display = "none";
      plus.style.display = "none";
      multiply.style.display = "none";
      w1.placeholder = "W₁₁";
      w2.placeholder = "W₂₁";

      break;

    // ARRAY 7

    case JSON.stringify(["2", "3", "1"]):
      //  input hidden and output layer nodes and arrowss

      formthree.style.display = "none";
      formone.style.marginTop = "10px";
      formYtwo.style.display = "none";

      drawCircle(80, 95, 20, "#87CEEB", "white");
      drawText(68, 105, "X₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 165, 20, "#87CEEB", "white");
      drawText(68, 174, "X₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 50, 20, "#ffdbe9", "white");
      drawText(220, 60, "H₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 135, 20, "#ffdbe9", "white");
      drawText(220, 145, "H₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 225, 20, "#ffdbe9", "white");
      drawText(220, 232, "H₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(370, 135, 20, "#d9c21d", "white");
      drawText(362, 142, "Y₁", "22px 'Times New Roman', Times, serif", "black");

      enableSubmitTwoOneButton.style.display = "block";
      x3.style.display = "none";
      w3.style.display = "none";
      plus.style.display = "none";
      multiply.style.display = "none";
      w1.placeholder = "W₁₁";
      w2.placeholder = "W₂₁";

      break;

    // ARRAY 8

    case JSON.stringify(["2", "3", "2"]):
      //  input hidden and output layer nodes and arrows

      formthree.style.display = "none";
      formone.style.marginTop = "-20px";

      drawCircle(80, 95, 20, "#87CEEB", "white");
      drawText(68, 105, "X₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(80, 165, 20, "#87CEEB", "white");
      drawText(68, 174, "X₂", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 50, 20, "#ffdbe9", "white");
      drawText(220, 60, "H₁", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(230, 135, 20, "#ffdbe9", "white");
      drawText(220, 145, "H₂", "22px 'Times New Roman', Times, serif", "black");


      drawCircle(230, 225, 20, "#ffdbe9", "white");
      drawText(220, 232, "H₃", "22px 'Times New Roman', Times, serif", "black");

      drawCircle(380, 95, 20, "#d9c21d", "white");
      drawText(372, 102, "Y₁", "22px 'Times New Roman', Times, serif", "black");


      drawCircle(380, 165, 20, "#d9c21d", "white");
      drawText(372, 172, "Y₂", "22px 'Times New Roman', Times, serif", "black");

      enableSubmitTwoTwoButton.style.display = "block";
      x3.style.display = "none";
      w3.style.display = "none";
      plus.style.display = "none";
      multiply.style.display = "none";
      w1.placeholder = "W₁₁";
      w2.placeholder = "W₂₁";

      // Options for the source select

      break;

    default:
      console.log("Array not found");
      break;
  }
}

// WORKFLOW OF SUBMIT BUTTON OF CONNECT SECTION
var weightInputsArray = [];
var values = [];
var cellValuesArray = [];

function X()
{
  nullSelectAppend();
  arrayFunctionForSelect();
  weight.value = "";
}
function sourced()
{
  var nullOptionSource = new Option("NULL", "");
  nullOptionSource.hidden = true;
  nullOptionSource.selected = true;
  source.add(nullOptionSource);

  var nullOptionDestination = new Option("NULL", "");
  nullOptionDestination.hidden = true;
  nullOptionDestination.selected = true;
  destination.add(nullOptionDestination);
  weight.value = "";
}
function submitFunction() {
  // var biasInput = bias.value;
  var sourceInput = source.value;
  var destinationInput = destination.value;

  // Get the entered value
  let value = parseFloat(weight.value);

  if (isNaN(value) || value < -1) {
    weight.value = "-1";
  }

  if (value > 1) {
    weight.value = "1";
  }

  value = parseFloat(value.toFixed(2));

  // Update the input value with the rounded value
  weight.value = value;

  if (source.value === "" || destination.value === "") {
    alerts1('info','','Please select the value for both <b>Source</b> and <b>Destination</b>.');
    
    return;
  } else if (weight.value === "") {

    alerts1('info','Weight Missing!!!','Please enter the value for weight.');
    
    return;
  }

  var weightInput = value;

  var arrayForNode = [
    controlInput.value,
    controlHidden.value,
    controlOutput.value,
  ];


  // Check if the values already exist in the array
  var duplicateValues = values.filter(function (value) {
    return value[0] === sourceInput && value[1] === destinationInput;
  });
  if (duplicateValues.length > 0) {
    alerts1('error','This combination is already in use!','Please select a different combination of Source and Destination.');
   
    return;
  }

  // Check if weightInput is outside the range [0, 1]
  if (weightInput < -1 || weightInput > 1) {
    alerts1('error','Value out of range!!','Weight value should be between -1 and 1.');
   
    return;
  }

  if (weightInput === "") {
    alerts1('error','Weight value missing!!','Please enter the weight value.');
    
    return;
  }
  if (sourceInput === "NULL") {
    alerts1('error','Source Missing!!','Please select the <b>Source</b> node.');
    
    return;
  }
  if (destinationInput === "NULL") {
    alerts1('error','Destination Missing!!','Please select the <b>Destination</b> node.');
    
    
    return;
  }

  if (   
    sourceInput === "NULL" &&
    destinationInput === "NULL" &&
    weightInput === ""
  ) {
    alerts1('error','Oops...','First select <b>Source</b>, <b>Destination</b> and enter the <b>Weight</b> value.<br>Then, click on <b style="color:#FF6600">SUBMIT<b> button.');
  
    return;
  }
if(resetButton.disabled==true)
{
  resetButton.disabled=false;
}
 
  switch (JSON.stringify(arrayForNode)) {
    case JSON.stringify(["3", "4", "2"]):
      // Add values to the array
      values.push([sourceInput, destinationInput]);

      if (sourceInput === "X₁" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 65, 209, 28, 2, "white");
        drawTextRotate(135,45,weightInput,"16px 'Times New Roman', Times, serif","red",-16);
        weightInputsArray.push({
          X1: sourceInput,
          H1: destinationInput,
          W1: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 65, 209, 93, 2, "white");
        drawTextRotate(140,68,weightInput,"16px 'Times New Roman', Times, serif","red",10);
        weightInputsArray.push({
          X1: sourceInput,
          H2: destinationInput,
          W1: weightInput,
        });
     
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 65, 209, 160, 2, "white");
        drawTextRotate(132,86,weightInput,"16px 'Times New Roman', Times, serif","red",40);
        weightInputsArray.push({
          X1: sourceInput,
          H3: destinationInput,
          W1: weightInput,
        });
     

        nullSelectAppend();

        arrayFunctionForSelect();


      }
      if (sourceInput === "X₁" && destinationInput === "H₄") {
        drawArrow(ctx, 99, 65, 215, 227, 2, "white");
        drawTextRotate(104,88,weightInput,"16px 'Times New Roman', Times, serif","red",-290);
        weightInputsArray.push({
          X1: sourceInput,
          H4: destinationInput,
          W1: weightInput,
        });
     
        nullSelectAppend();
        arrayFunctionForSelect();

      }
      if (sourceInput === "X₂" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 140, 209, 36, 2, "white");

        drawTextRotate(
          112,
          118,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          -40
        );
        weightInputsArray.push({
          X2: sourceInput,
          H1: destinationInput,
          W2: weightInput,
        });
     
        nullSelectAppend();
        arrayFunctionForSelect();

      }
      if (sourceInput === "X₂" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 140, 209, 98, 2, "white");
        drawTextRotate(
          170,
          104,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          -16
        );
        weightInputsArray.push({
          X2: sourceInput,
          H2: destinationInput,
          W2: weightInput,
        });
     
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 140, 209, 168, 2, "white");
        drawTextRotate(
          174,
          150,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          10
        );
        weightInputsArray.push({
          X2: sourceInput,
          H3: destinationInput,
          W2: weightInput,
        });
     
        nullSelectAppend();
        arrayFunctionForSelect();

      }
      if (sourceInput === "X₂" && destinationInput === "H₄") {
        drawArrow(ctx, 99, 140, 210, 235, 2, "white");
        drawTextRotate(
          110,
          160,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          50
        );
        weightInputsArray.push({
          X2: sourceInput,
          H4: destinationInput,
          W2: weightInput,
        });
     
        nullSelectAppend();
        arrayFunctionForSelect();

      }
      if (sourceInput === "X₃" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 210, 216, 46, 2, "white");
        drawTextRotate(
          107,
          186,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          -50
        );
        weightInputsArray.push({
          X3: sourceInput,
          H1: destinationInput,
          W3: weightInput,
        });
     
        nullSelectAppend();
        arrayFunctionForSelect();


      }
      if (sourceInput === "X₃" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 210, 209, 106, 2, "white");
        drawTextRotate(
          132,
          187,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          -45
        );
        weightInputsArray.push({
          X3: sourceInput,
          H2: destinationInput,
          W3: weightInput,
        });
     
        nullSelectAppend();
        arrayFunctionForSelect();


      }
      if (sourceInput === "X₃" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 210, 209, 176, 2, "white");

        drawTextRotate(
          145,
          203,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          -10
        );
        weightInputsArray.push({
          X3: sourceInput,
          H3: destinationInput,
          W3: weightInput,
        });
     
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₃" && destinationInput === "H₄") {
        drawArrow(ctx, 99, 210, 210, 248, 2, "white");
        drawTextRotate(
          135,
          229,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          12
        );
        weightInputsArray.push({
          X3: sourceInput,
          H4: destinationInput,
          W3: weightInput,
        });
     
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "H₁" && destinationInput === "Y₁") {
        drawArrow(ctx, 250, 30, 348, 88, 2, "white");
        drawTextRotate(310, 58, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",38);
        weightInputsArray.push({
          H1: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });


       // Add the NULL option to the source select as a hidden selected option
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₁") {
        drawArrow(ctx, 250, 95, 348, 95, 2, "white");
        drawTextRotate(270, 87, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",0);
        weightInputsArray.push({
          H2: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);

      }
      if (sourceInput === "H₃" && destinationInput === "Y₁") {
        drawArrow(ctx, 250, 175, 348, 103, 2, "white");
        drawTextRotate(271, 145, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",-40);

        weightInputsArray.push({
          H3: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        // Add the NULL option to the destination select as a hidden selected option
        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₄" && destinationInput === "Y₁") {
        drawArrow(ctx, 250, 245, 352, 112, 2, "white");
        drawTextRotate(266, 205, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",-50);
     
        weightInputsArray.push({
          H4: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        // Add the NULL option to the destination select as a hidden selected option
        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₁" && destinationInput === "Y₂") {
        drawArrow(ctx, 250, 30, 350, 163, 2, "white");
        drawTextRotate(282, 59, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",50);

        weightInputsArray.push({
          H1: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });

   
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        // Add the NULL option to the destination select as a hidden selected option
        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₂") {
        drawArrow(ctx, 250, 95, 348, 171, 2, "white");
        drawTextRotate(290, 117, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",40);

        weightInputsArray.push({
          H2: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });
   
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₃" && destinationInput === "Y₂") {
        drawArrow(ctx, 250, 175, 348, 175, 2, "white");
        drawTextRotate(295, 167, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",0);
        weightInputsArray.push({
          H3: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₄" && destinationInput === "Y₂") {
        drawArrow(ctx, 250, 245, 348, 180, 2, "white");
        drawTextRotate(300, 204, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",-30);
        weightInputsArray.push({
          H4: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }

      weight.value = "";  

      var table = document.getElementById("myTable");

      var rowCount = table.rows.length - 1;
      var row = table.insertRow(-1);

      var cell0 = row.insertCell(0);
      cell0.innerHTML = ++rowCount;

      var cell2 = row.insertCell(1);
      cell2.innerHTML = sourceInput;

      var cell3 = row.insertCell(2);
      cell3.innerHTML = destinationInput;

      var cell4 = row.insertCell(3);
      cell4.innerHTML = weightInput;

      var tableCompute = document.getElementById("myTableCompute");
      var rowCountCompute = tableCompute.rows.length - 1;

      var rowCompute = tableCompute.insertRow(-1);

      var cell0Compute = rowCompute.insertCell(0);
      cell0Compute.innerHTML = ++rowCountCompute;

      var cell2Compute = rowCompute.insertCell(1);
      cell2Compute.innerHTML = sourceInput;

      var cell3Compute = rowCompute.insertCell(2);
      cell3Compute.innerHTML = destinationInput;

      var cell4Compute = rowCompute.insertCell(3);
      cell4Compute.innerHTML = weightInput;

      var tablecompute = document.getElementById("myTableCompute");
      console.log(tablecompute);
      var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

      console.log(tbodycompute);
      var rowscompute = tbodycompute.getElementsByTagName("tr");

      for (var i = 0; i < rowscompute.length; i++) {
        var rowcompute = rowscompute[i];
        var cellscompute = rowcompute.getElementsByTagName("td");
        console.log(rowcompute);
        console.log(cellscompute);
        for (var j = 0; j < cellscompute.length; j++) {
          var cellcompute = cellscompute[j];
          if (cellcompute.innerHTML == "H₁" && j == 2) {
            for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 
         
          }
        }
      }

      if (table.rows.length == 13) {
        alerts1('success','Nodes of input & hidden layer are connected!!!','Now connect the nodes of the hidden layer (H<sub>n</sub>) to the nodes of the output layer (Y<sub>n</sub>) using the same procedure.');

        console.log("output layer inputs");
        document.getElementById("source").innerHTML = "";
        document.getElementById("destination").innerHTML = "";
        var sourceOptions = [
          { value: "H₁", text: "H₁" },
          { value: "H₂", text: "H₂" },
          { value: "H₃", text: "H₃" },
          { value: "H₄", text: "H₄" },
        ];

        // Options for the destination select
        var destinationOptions = [
          { value: "Y₁", text: "Y₁" },
          { value: "Y₂", text: "Y₂" },
        ];

        // Append options to the destination select
        destinationOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          destination.add(newOption);
        });

        // Add the NULL option to the source select as a hidden selected option
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        // Append other options to the source select
        sourceOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          source.add(newOption);
        });

        // Add the NULL option to the destination select as a hidden selected option
        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (table.rows.length == 21) {
        connectSubmitButtonEnabled.disabled = true;
        
        alertNEXT();
      }
      break;
    
    case JSON.stringify(["3", "4", "1"]):
      // Add values to the array
      values.push([sourceInput, destinationInput]);
      if (sourceInput === "X₁" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 65, 209, 28, 2, "white");
        drawTextRotate(135,45,weightInput,"16px 'Times New Roman', Times, serif","red",-16);
        weightInputsArray.push({
          X1: sourceInput,
          H1: destinationInput,
          W1: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "X₁" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 65, 209, 93, 2, "white");
        drawTextRotate(140,68,weightInput,"16px 'Times New Roman', Times, serif","red",10);
        weightInputsArray.push({
          X1: sourceInput,
          H2: destinationInput,
          W1: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 65, 209, 160, 2, "white");
        drawTextRotate(132,86,weightInput,"16px 'Times New Roman', Times, serif","red",40);
        weightInputsArray.push({
          X1: sourceInput,
          H3: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₄") {
        drawArrow(ctx, 99, 65, 215, 227, 2, "white");
        drawTextRotate(104,88,weightInput,"16px 'Times New Roman', Times, serif","red",-290);
        weightInputsArray.push({
          X1: sourceInput,
          H4: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 140, 209, 36, 2, "white");

        drawTextRotate(
          112,
          118,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          -40
        );
        weightInputsArray.push({
          X2: sourceInput,
          H1: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 140, 209, 98, 2, "white");
        drawTextRotate(
          170,
          104,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          -16
        );
        weightInputsArray.push({
          X2: sourceInput,
          H2: destinationInput,
          W2: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 140, 209, 168, 2, "white");
        drawTextRotate(
          174,
          150,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          10
        );
        weightInputsArray.push({
          X2: sourceInput,
          H3: destinationInput,
          W2: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₄") {
        drawArrow(ctx, 99, 140, 210, 235, 2, "white");
        drawTextRotate(
          110,
          160,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          50
        );
        weightInputsArray.push({
          X2: sourceInput,
          H4: destinationInput,
          W2: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₃" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 210, 216, 46, 2, "white");
        drawTextRotate(
          107,
          186,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          -50
        );
        weightInputsArray.push({
          X3: sourceInput,
          H1: destinationInput,
          W3: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₃" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 210, 209, 106, 2, "white");
        drawTextRotate(
          132,
          187,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          -45
        );
        weightInputsArray.push({
          X3: sourceInput,
          H2: destinationInput,
          W3: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₃" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 210, 209, 176, 2, "white");

        drawTextRotate(
          145,
          203,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          -10
        );
        weightInputsArray.push({
          X3: sourceInput,
          H3: destinationInput,
          W3: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₃" && destinationInput === "H₄") {
        drawArrow(ctx, 99, 210, 210, 248, 2, "white");
        drawTextRotate(
          135,
          229,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          12
        );
        weightInputsArray.push({
          X3: sourceInput,
          H4: destinationInput,
          W3: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "H₁" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 30, 365, 120, 2, "white");
        drawTextRotate(293, 56, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",40);
        weightInputsArray.push({
          H1: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 95, 364, 128, 2, "white");
        drawTextRotate(275, 96, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",18);
        weightInputsArray.push({
          H2: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₃" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 170, 364, 135, 2, "white");
        drawTextRotate(270, 152, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",-10);

        weightInputsArray.push({
          H3: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₄" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 250, 365, 143, 2, "white");
        drawTextRotate(290, 195, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",-30);

        weightInputsArray.push({
          H4: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }

      weight.value = "";
      var table = document.getElementById("myTable");
      var rowCount = table.rows.length - 1;

      var row = table.insertRow(-1);

      var cell0 = row.insertCell(0);
      cell0.innerHTML = ++rowCount;

      var cell2 = row.insertCell(1);
      cell2.innerHTML = sourceInput;

      var cell3 = row.insertCell(2);
      cell3.innerHTML = destinationInput;

      var cell4 = row.insertCell(3);
      cell4.innerHTML = weightInput;

      var tableCompute = document.getElementById("myTableCompute");
      var rowCountCompute = tableCompute.rows.length - 1;

      var rowCompute = tableCompute.insertRow(-1);

      var cell0Compute = rowCompute.insertCell(0);
      cell0Compute.innerHTML = ++rowCountCompute;

      var cell2Compute = rowCompute.insertCell(1);
      cell2Compute.innerHTML = sourceInput;

      var cell3Compute = rowCompute.insertCell(2);
      cell3Compute.innerHTML = destinationInput;

      var cell4Compute = rowCompute.insertCell(3);
      cell4Compute.innerHTML = weightInput;

      var tablecompute = document.getElementById("myTableCompute");
      console.log(tablecompute);
      var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

      console.log(tbodycompute);
      var rowscompute = tbodycompute.getElementsByTagName("tr");

      for (var i = 0; i < rowscompute.length; i++) {
        var rowcompute = rowscompute[i];
        var cellscompute = rowcompute.getElementsByTagName("td");
        console.log(rowcompute);
        console.log(cellscompute);
        for (var j = 0; j < cellscompute.length; j++) {
          var cellcompute = cellscompute[j];
          if (cellcompute.innerHTML == "H₁" && j == 2) {
            for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 
          }
        }
      }

      if (table.rows.length == 13) {
        alerts1('success','Nodes of input & hidden layer are connected!!!','Now connect the nodes of the hidden layer (H<sub>n</sub>) to the nodes of the output layer (Y<sub>n</sub>) using the same procedure.');

        document.getElementById("source").innerHTML = "";
        document.getElementById("destination").innerHTML = "";
        var sourceOptions = [
          { value: "H₁", text: "H₁" },
          { value: "H₂", text: "H₂" },
          { value: "H₃", text: "H₃" },
          { value: "H₄", text: "H₄" },
        ];

        // Options for the destination select
        var destinationOptions = [{ value: "Y₁", text: "Y₁" }];

        // Append options to the source select
        sourceOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          source.add(newOption);
        });

        // Append options to the destination select
        destinationOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          destination.add(newOption);
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (table.rows.length == 17) {
        connectSubmitButtonEnabled.disabled = true;
      
        alertNEXT();
      }
      break;

    case JSON.stringify(["3", "3", "1"]):
      // Add values to the array
      values.push([sourceInput, destinationInput]);

      if (sourceInput === "X₁" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 65, 209, 50, 2, "white");
        drawTextRotate(
          135,
          50,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "red",
          -10
        );
        weightInputsArray.push({
          X1: sourceInput,
          H1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "X₁" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 65, 209, 130, 2, "white");
        drawTextRotate(
          140,
          83,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "red",
          25
        );
        weightInputsArray.push({
          X1: sourceInput,
          H2: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 65, 215, 210, 2, "white");
        drawTextRotate(
          103,
          90,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "red",
          50
        );

        weightInputsArray.push({
          X1: sourceInput,
          H3: destinationInput,
          W1: weightInput,
        });


        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "X₂" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 135, 212, 60, 2, "white");
        drawTextRotate(
          111,
          115,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          -40
        );
        weightInputsArray.push({
          X2: sourceInput,
          H1: destinationInput,
          W2: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 135, 209, 135, 2, "white");
        drawTextRotate(
          180,
          125,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          0
        );
        weightInputsArray.push({
          X2: sourceInput,
          H2: destinationInput,
          W2: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 135, 211, 219, 2, "white");
        drawTextRotate(
          130,
          145,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          30
        );
        weightInputsArray.push({
          X2: sourceInput,
          H3: destinationInput,
          W2: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "X₃" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 208, 215, 68, 2, "white");
        drawTextRotate(
          113,
          180,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          -50
        );
        weightInputsArray.push({
          X3: sourceInput,
          H1: destinationInput,
          W3: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₃" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 208, 209, 140, 2, "white");
        drawTextRotate(
          145,
          190,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          -50
        );
        weightInputsArray.push({
          X3: sourceInput,
          H2: destinationInput,
          W3: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₃" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 208, 210, 227, 2, "white");

        drawTextRotate(
          145,
          210,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          0
        );
        weightInputsArray.push({
          X3: sourceInput,
          H3: destinationInput,
          W3: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "H₁" && destinationInput === "Y₁") {
       drawArrow(ctx, 248, 55, 350, 131, 2, "white");
        drawTextRotate(285,75,weightInput,"16px 'Times New Roman', Times, serif","red",40);
       
        weightInputsArray.push({
          H1: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₁") {
        drawArrow(ctx, 248, 135, 350, 135, 2, "white");
        drawTextRotate(280,127,weightInput,"16px 'Times New Roman', Times, serif","red",0);
       
        weightInputsArray.push({
          H2: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₃" && destinationInput === "Y₁") {
        drawArrow(ctx, 248, 222, 350, 139, 2, "white");
        drawTextRotate(288,175,weightInput,"16px 'Times New Roman', Times, serif","red",-30);

        weightInputsArray.push({
          H3: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }

      weight.value = "";
      var table = document.getElementById("myTable");
      var rowCount = table.rows.length - 1;

      var row = table.insertRow(-1);

      var cell0 = row.insertCell(0);
      cell0.innerHTML = ++rowCount;

      var cell2 = row.insertCell(1);
      cell2.innerHTML = sourceInput;

      var cell3 = row.insertCell(2);
      cell3.innerHTML = destinationInput;

      var cell4 = row.insertCell(3);
      cell4.innerHTML = weightInput;

      var tableCompute = document.getElementById("myTableCompute");
      var rowCountCompute = tableCompute.rows.length - 1;

      var rowCompute = tableCompute.insertRow(-1);

      var cell0Compute = rowCompute.insertCell(0);
      cell0Compute.innerHTML = ++rowCountCompute;

      var cell2Compute = rowCompute.insertCell(1);
      cell2Compute.innerHTML = sourceInput;

      var cell3Compute = rowCompute.insertCell(2);
      cell3Compute.innerHTML = destinationInput;

      var cell4Compute = rowCompute.insertCell(3);
      cell4Compute.innerHTML = weightInput;

      var tablecompute = document.getElementById("myTableCompute");
      console.log(tablecompute);
      var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

      console.log(tbodycompute);
      var rowscompute = tbodycompute.getElementsByTagName("tr");

      for (var i = 0; i < rowscompute.length; i++) {
        var rowcompute = rowscompute[i];
        var cellscompute = rowcompute.getElementsByTagName("td");
        console.log(rowcompute);
        console.log(cellscompute);
        for (var j = 0; j < cellscompute.length; j++) {
          var cellcompute = cellscompute[j];
          if (cellcompute.innerHTML == "H₁" && j == 2) {
            for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 

          }
        }
      }

      //  var table = document.getElementById("myTable");
      if (table.rows.length == 10) {
        alerts1('success','Nodes of input & hidden layer are connected!!!','Now connect the nodes of the hidden layer (H<sub>n</sub>) to the nodes of the output layer (Y<sub>n</sub>) using the same procedure.');

        document.getElementById("source").innerHTML = "";
        document.getElementById("destination").innerHTML = "";
        var sourceOptions = [
          { value: "H₁", text: "H₁" },
          { value: "H₂", text: "H₂" },
          { value: "H₃", text: "H₃" },
        ];

        // Options for the destination select
        var destinationOptions = [{ value: "Y₁", text: "Y₁" }];

        // Append options to the source select
        sourceOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          source.add(newOption);
        });

        // Append options to the destination select
        destinationOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          destination.add(newOption);
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (table.rows.length == 13) {
        connectSubmitButtonEnabled.disabled = true;

  
        alertNEXT();
      }
      break;

    case JSON.stringify(["3", "3", "2"]):
      // Add values to the array
      values.push([sourceInput, destinationInput]);
      if (sourceInput === "X₁" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 65, 209, 50, 2, "white");
        drawTextRotate(135,50,weightInput,"16px 'Times New Roman', Times, serif","red",-10);
        weightInputsArray.push({
          X1: sourceInput,
          H1: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 65, 209, 130, 2, "white");
        drawTextRotate(140,83,weightInput,"16px 'Times New Roman', Times, serif","red",25);
                    
        weightInputsArray.push({
          X1: sourceInput,
          H2: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 65, 215, 210, 2, "white");
        drawTextRotate(103,90,weightInput,"16px 'Times New Roman', Times, serif","red",50);
        weightInputsArray.push({
          X1: sourceInput,
          H3: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "X₂" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 135, 212, 60, 2, "white");

        drawTextRotate(111,115,weightInput,"16px 'Times New Roman', Times, serif","yellow",-40);
        weightInputsArray.push({
          X2: sourceInput,
          H1: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 135, 209, 135, 2, "white");
        drawTextRotate(180,125,weightInput,"16px 'Times New Roman', Times, serif","yellow",0);
        weightInputsArray.push({
          X2: sourceInput,
          H2: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 135, 211, 219, 2, "white");
        drawTextRotate(
          130,
          145,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "yellow",
          30
        );
        weightInputsArray.push({
          X2: sourceInput,
          H3: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "X₃" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 208, 215, 68, 2, "white");
        drawTextRotate(
          113,
          180,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          -50
        );
        weightInputsArray.push({
          X3: sourceInput,
          H1: destinationInput,
          W3: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₃" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 208, 209, 140, 2, "white");
        drawTextRotate(
          145,
          190,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          -50
        );
        weightInputsArray.push({
          X3: sourceInput,
          H2: destinationInput,
          W3: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₃" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 208, 210, 227, 2, "white");

        drawTextRotate(
          145,
          210,
          weightInput,
          "16px 'Times New Roman', Times, serif",
          "orange",
          0
        );
        weightInputsArray.push({
          X3: sourceInput,
          H3: destinationInput,
          W3: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "H₁" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 50, 360, 95, 2, "white");
        drawTextRotate(300,63,weightInput,"16px 'Times New Roman', Times, serif","limegreen",20);
        weightInputsArray.push({
          H1: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 135, 360, 103, 2, "white");
        drawTextRotate(270,118,weightInput,"16px 'Times New Roman', Times, serif","limegreen",-10);
    
        weightInputsArray.push({
          H2: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₃" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 230, 360, 111, 2, "white");
        drawTextRotate(267,200,weightInput,"16px 'Times New Roman', Times, serif","limegreen",-45);
       
        weightInputsArray.push({
          H3: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }

      if (sourceInput === "H₁" && destinationInput === "Y₂") {
        drawArrow(ctx, 247.5, 50, 360, 163, 2, "white");
        drawTextRotate(295,90,weightInput,"16px 'Times New Roman', Times, serif","limegreen",50);
  
        weightInputsArray.push({
          H1: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₂") {
        drawArrow(ctx, 247.5, 135, 360, 173, 2, "white");
        drawTextRotate(285,137,weightInput,"16px 'Times New Roman', Times, serif","limegreen",20);
       
        weightInputsArray.push({
          H2: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₃" && destinationInput === "Y₂") {
        drawArrow(ctx, 247.5, 230, 360, 178, 2, "white");
        drawTextRotate(293,199,weightInput,"16px 'Times New Roman', Times, serif","limegreen",-20);
     

        weightInputsArray.push({
          H3: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });
     
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }

      weight.value = "";
      var table = document.getElementById("myTable");
      var rowCount = table.rows.length - 1;

      var row = table.insertRow(-1);

      var cell0 = row.insertCell(0);
      cell0.innerHTML = ++rowCount;

      var cell2 = row.insertCell(1);
      cell2.innerHTML = sourceInput;

      var cell3 = row.insertCell(2);
      cell3.innerHTML = destinationInput;

      var cell4 = row.insertCell(3);
      cell4.innerHTML = weightInput;

      var tableCompute = document.getElementById("myTableCompute");
      var rowCountCompute = tableCompute.rows.length - 1;

      var rowCompute = tableCompute.insertRow(-1);

      var cell0Compute = rowCompute.insertCell(0);
      cell0Compute.innerHTML = ++rowCountCompute;

      var cell2Compute = rowCompute.insertCell(1);
      cell2Compute.innerHTML = sourceInput;

      var cell3Compute = rowCompute.insertCell(2);
      cell3Compute.innerHTML = destinationInput;

      var cell4Compute = rowCompute.insertCell(3);
      cell4Compute.innerHTML = weightInput;
      //  var table = document.getElementById("myTable");

      var tablecompute = document.getElementById("myTableCompute");
      console.log(tablecompute);
      var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

      console.log(tbodycompute);
      var rowscompute = tbodycompute.getElementsByTagName("tr");

      for (var i = 0; i < rowscompute.length; i++) {
        var rowcompute = rowscompute[i];
        var cellscompute = rowcompute.getElementsByTagName("td");
        console.log(rowcompute);
        console.log(cellscompute);
        for (var j = 0; j < cellscompute.length; j++) {
          var cellcompute = cellscompute[j];
          if (cellcompute.innerHTML == "H₁" && j == 2) {
            for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 
          }
        }
      }

      if (table.rows.length == 10) {
        alerts1('success','Nodes of input & hidden layer are connected!!!','Now connect the nodes of the hidden layer (H<sub>n</sub>) to the nodes of the output layer (Y<sub>n</sub>) using the same procedure.');

        document.getElementById("source").innerHTML = "";
        document.getElementById("destination").innerHTML = "";
        var sourceOptions = [
          { value: "H₁", text: "H₁" },
          { value: "H₂", text: "H₂" },
          { value: "H₃", text: "H₃" },
        ];

        // Options for the destination select
        var destinationOptions = [
          { value: "Y₁", text: "Y₁" },
          { value: "Y₂", text: "Y₂" },
        ];

        // Append options to the source select
        sourceOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          source.add(newOption);
        });

        // Append options to the destination select
        destinationOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          destination.add(newOption);
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (table.rows.length == 16) {
        connectSubmitButtonEnabled.disabled = true;

        alertNEXT();
      }

      break;

    case JSON.stringify(["2", "4", "1"]):
      // Add values to the array
      values.push([sourceInput, destinationInput]);

      if (sourceInput === "X₁" && destinationInput === "H₁") {  
        drawArrow(ctx, 99, 95, 210, 30, 2, "white");
        drawTextRotate(145,61,weightInput,"16px 'Times New Roman', Times, serif","red",-30);
        weightInputsArray.push({
          X1: sourceInput,
          H1: destinationInput,
          W1: weightInput,
        });

       X();
        
      }
      if (sourceInput === "X₁" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 95, 210, 95, 2, "white");
        drawTextRotate(135,89,weightInput,"16px 'Times New Roman', Times, serif","red",0);
        weightInputsArray.push({
          X1: sourceInput,
          H2: destinationInput,
          W1: weightInput,
        });

       X();
      }
      if (sourceInput === "X₁" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 95, 210, 165, 2, "white");
        drawTextRotate(195,143,weightInput,"16px 'Times New Roman', Times, serif","red",30);
        weightInputsArray.push({
          X1: sourceInput,
          H3: destinationInput,
          W1: weightInput,
        });

       X();
      }
      if (sourceInput === "X₁" && destinationInput === "H₄") {
        drawArrow(ctx, 99, 95, 211, 240, 2, "white");
        drawTextRotate(185,191,weightInput,"16px 'Times New Roman', Times, serif","red",40);
       
        weightInputsArray.push({
          X1: sourceInput,
          H4: destinationInput,
          W1: weightInput,
        });

        X();
      }
      if (sourceInput === "X₂" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 178, 210, 37, 2, "white");
        drawTextRotate(186,58,weightInput,"16px 'Times New Roman', Times, serif","yellow",-50);
       
        weightInputsArray.push({
          X2: sourceInput,
          H1: destinationInput,
          W2: weightInput,
        });

       X();
      }
      if (sourceInput === "X₂" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 180, 210, 99, 2, "white");
        drawTextRotate(180,109,weightInput,"16px 'Times New Roman', Times, serif","yellow",-40);
       
        weightInputsArray.push({
          X2: sourceInput,
          H2: destinationInput,
          W2: weightInput,
        });

        X();
        
      }
      if (sourceInput === "X₂" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 180, 210, 169, 2, "white");
        drawText(124, 174, weightInput, "16px 'Times New Roman', Times, serif", "yellow");
        weightInputsArray.push({
          X2: sourceInput,
          H3: destinationInput,
          W2: weightInput,
        });

       X();
      }
      if (sourceInput === "X₂" && destinationInput === "H₄") {
        drawArrow(ctx, 99, 180, 211, 244, 2, "white");
        drawTextRotate(150, 198, weightInput, "16px 'Times New Roman', Times, serif", "yellow",15);

        weightInputsArray.push({
          X2: sourceInput,
          H4: destinationInput,
          W2: weightInput,
        });

     X();
      }

      if (sourceInput === "H₁" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 30, 365, 120, 2, "white");
        drawTextRotate(293, 56, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",40);
        weightInputsArray.push({
          H1: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

       sourced();
       
      }
      if (sourceInput === "H₂" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 95, 364, 128, 2, "white");
        drawTextRotate(275, 96, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",18);
        weightInputsArray.push({
          H2: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        sourced();
      }
      if (sourceInput === "H₃" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 170, 364, 135, 2, "white");
        drawTextRotate(270, 152, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",-10);

        weightInputsArray.push({
          H3: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

       sourced();
      }
      if (sourceInput === "H₄" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 250, 365, 143, 2, "white");
        drawTextRotate(290, 195, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",-30);

        weightInputsArray.push({
          H4: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        sourced();
      }

      var table = document.getElementById("myTable");
      var rowCount = table.rows.length - 1;

      var row = table.insertRow(-1);

      var cell0 = row.insertCell(0);
      cell0.innerHTML = ++rowCount;

      var cell2 = row.insertCell(1);
      cell2.innerHTML = sourceInput;

      var cell3 = row.insertCell(2);
      cell3.innerHTML = destinationInput;

      var cell4 = row.insertCell(3);
      cell4.innerHTML = weightInput;

      var tableCompute = document.getElementById("myTableCompute");
      var rowCountCompute = tableCompute.rows.length - 1;

      var rowCompute = tableCompute.insertRow(-1);

      var cell0Compute = rowCompute.insertCell(0);
      cell0Compute.innerHTML = ++rowCountCompute;

      var cell2Compute = rowCompute.insertCell(1);
      cell2Compute.innerHTML = sourceInput;

      var cell3Compute = rowCompute.insertCell(2);
      cell3Compute.innerHTML = destinationInput;

      var cell4Compute = rowCompute.insertCell(3);
      cell4Compute.innerHTML = weightInput;

      var tablecompute = document.getElementById("myTableCompute");
      console.log(tablecompute);
      var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

      console.log(tbodycompute);
      var rowscompute = tbodycompute.getElementsByTagName("tr");

      for (var i = 0; i < rowscompute.length; i++) {
        var rowcompute = rowscompute[i];
        var cellscompute = rowcompute.getElementsByTagName("td");
        console.log(rowcompute);
        console.log(cellscompute);
        for (var j = 0; j < cellscompute.length; j++) {
          var cellcompute = cellscompute[j];
          if (cellcompute.innerHTML == "H₁" && j == 2) {
            for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";       
            } 
          }
        }
      }

     
      if (table.rows.length == 9) {
        alerts1('success','Nodes of input & hidden layer are connected!!!','Now connect the nodes of the hidden layer (H<sub>n</sub>) to the nodes of the output layer (Y<sub>n</sub>) using the same procedure.');
        document.getElementById("source").innerHTML = "";
        document.getElementById("destination").innerHTML = "";
        var sourceOptions = [
          { value: "H₁", text: "H₁" },
          { value: "H₂", text: "H₂" },
          { value: "H₃", text: "H₃" },
          { value: "H₄", text: "H₄" },
        ];

        // Options for the destination select
        var destinationOptions = [{ value: "Y₁", text: "Y₁" }];

        // Append options to the source select
        sourceOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          source.add(newOption);
        });

        // Append options to the destination select
        destinationOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          destination.add(newOption);
        });
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }

      if (table.rows.length == 13) {
        connectSubmitButtonEnabled.disabled = true;
        
        alertNEXT();
      }
      break;

    case JSON.stringify(["2", "4", "2"]):
      // Add values to the array
      values.push([sourceInput, destinationInput]);

      if (sourceInput === "X₁" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 95, 210, 30, 2, "white");
        drawTextRotate(145,61,weightInput,"16px 'Times New Roman', Times, serif","red",-30);
        weightInputsArray.push({
          X1: sourceInput,
          H1: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₂") {
        // X1 H2
        drawArrow(ctx, 99, 95, 210, 95, 2, "white");
        drawTextRotate(132,89,weightInput,"16px 'Times New Roman', Times, serif","red",0);
        weightInputsArray.push({
          X1: sourceInput,
          H2: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 95, 210, 165, 2, "white");
        drawTextRotate(195,143,weightInput,"16px 'Times New Roman', Times, serif","red",30);

        weightInputsArray.push({
          X1: sourceInput,
          H3: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₄") {
        drawArrow(ctx, 99, 95, 211, 240, 2, "white");
        drawTextRotate(185,191,weightInput,"16px 'Times New Roman', Times, serif","red",40);
        weightInputsArray.push({
          X1: sourceInput,
          H4: destinationInput,
          W1: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 178, 210, 37, 2, "white");
        drawTextRotate(186,58,weightInput,"16px 'Times New Roman', Times, serif","yellow",-50);
        weightInputsArray.push({
          X2: sourceInput,
          H1: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 180, 210, 99, 2, "white");
        drawTextRotate(180,109,weightInput,"16px 'Times New Roman', Times, serif","yellow",-40);
       
        weightInputsArray.push({
          X2: sourceInput,
          H2: destinationInput,
          W2: weightInput,
        });


        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 180, 210, 169, 2, "white");
        drawText(124, 174, weightInput, "16px 'Times New Roman', Times, serif", "yellow");

        weightInputsArray.push({
          X2: sourceInput,
          H3: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₄") {
        drawArrow(ctx, 99, 180, 211, 244, 2, "white");
        drawTextRotate(150, 198, weightInput, "16px 'Times New Roman', Times, serif", "yellow",15);
       
        weightInputsArray.push({
          X2: sourceInput,
          H4: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "H₁" && destinationInput === "Y₁") {
        drawArrow(ctx, 250, 30, 348, 88, 2, "white");
        drawTextRotate(310, 58, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",38);
     

        weightInputsArray.push({
          H1: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₁") {
        drawArrow(ctx, 250, 95, 348, 95, 2, "white");
        drawTextRotate(270, 87, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",0);
       
        weightInputsArray.push({
          H2: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₃" && destinationInput === "Y₁") {
        drawArrow(ctx, 250, 175, 348, 103, 2, "white");
        drawTextRotate(271, 145, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",-40);
      
        weightInputsArray.push({
          H3: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₄" && destinationInput === "Y₁") {
        drawArrow(ctx, 250, 245, 352, 112, 2, "white");
        drawTextRotate(266, 205, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",-50);
        
        weightInputsArray.push({
          H4: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₁" && destinationInput === "Y₂") {
        drawArrow(ctx, 250, 30, 350, 163, 2, "white");
        drawTextRotate(282, 59, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",50);
      
        weightInputsArray.push({
          H1: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₂") {
        drawArrow(ctx, 250, 95, 348, 171, 2, "white");
        drawTextRotate(290, 117, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",40);
       

        weightInputsArray.push({
          H2: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₃" && destinationInput === "Y₂") {
        drawArrow(ctx, 250, 175, 348, 175, 2, "white");
        drawTextRotate(295, 167, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",0);
        
        weightInputsArray.push({
          H3: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₄" && destinationInput === "Y₂") {
        drawArrow(ctx, 250, 245, 348, 180, 2, "white");
        drawTextRotate(300, 204, weightInput, "16px 'Times New Roman', Times, serif", "limegreen",-30);
      
        weightInputsArray.push({
          H4: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });


        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }

      weight.value = "";
      var table = document.getElementById("myTable");
      var rowCount = table.rows.length - 1;

      var row = table.insertRow(-1);

      var cell0 = row.insertCell(0);
      cell0.innerHTML = ++rowCount;

      var cell2 = row.insertCell(1);
      cell2.innerHTML = sourceInput;

      var cell3 = row.insertCell(2);
      cell3.innerHTML = destinationInput;

      var cell4 = row.insertCell(3);
      cell4.innerHTML = weightInput;

      var tableCompute = document.getElementById("myTableCompute");
      var rowCountCompute = tableCompute.rows.length - 1;

      var rowCompute = tableCompute.insertRow(-1);

      var cell0Compute = rowCompute.insertCell(0);
      cell0Compute.innerHTML = ++rowCountCompute;

      var cell2Compute = rowCompute.insertCell(1);
      cell2Compute.innerHTML = sourceInput;

      var cell3Compute = rowCompute.insertCell(2);
      cell3Compute.innerHTML = destinationInput;

      var cell4Compute = rowCompute.insertCell(3);
      cell4Compute.innerHTML = weightInput;

      var tablecompute = document.getElementById("myTableCompute");
      console.log(tablecompute);
      var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

      console.log(tbodycompute);
      var rowscompute = tbodycompute.getElementsByTagName("tr");

      for (var i = 0; i < rowscompute.length; i++) {
        var rowcompute = rowscompute[i];
        var cellscompute = rowcompute.getElementsByTagName("td");
        console.log(rowcompute);
        console.log(cellscompute);
        for (var j = 0; j < cellscompute.length; j++) {
          var cellcompute = cellscompute[j];
          if (cellcompute.innerHTML == "H₁" && j == 2) {
            for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 
          }
        }
      }

      if (table.rows.length == 9) {
        alerts1('success','Nodes of input & hidden layer are connected!!!','Now connect the nodes of the hidden layer (H<sub>n</sub>) to the nodes of the output layer (Y<sub>n</sub>) using the same procedure.');
        document.getElementById("source").innerHTML = "";
        document.getElementById("destination").innerHTML = "";
        var sourceOptions = [
          { value: "H₁", text: "H₁" },
          { value: "H₂", text: "H₂" },
          { value: "H₃", text: "H₃" },
          { value: "H₄", text: "H₄" },
        ];

        // Options for the destination select
        var destinationOptions = [
          { value: "Y₁", text: "Y₁" },
          { value: "Y₂", text: "Y₂" },
        ];

        // Append options to the source select
        sourceOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          source.add(newOption);
        });

        // Append options to the destination select
        destinationOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          destination.add(newOption);
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (table.rows.length == 17) {
        connectSubmitButtonEnabled.disabled = true;
        alertNEXT();
      }
      break;

    case JSON.stringify(["2", "3", "1"]):
      // Add values to the array
      values.push([sourceInput, destinationInput]);

      if (sourceInput === "X₁" && destinationInput === "H₁") {
        drawArrow(ctx, 100, 98, 208, 55, 2, "white");
        drawTextRotate(145,70,weightInput,"16px 'Times New Roman', Times, serif","red",-15);
          weightInputsArray.push({
          X1: sourceInput,
          H1: destinationInput,
          W1: weightInput,
        });
 
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₂") {
        drawArrow(ctx, 100, 98, 210, 135, 2, "white");
        drawTextRotate(140,105,weightInput,"16px 'Times New Roman', Times, serif","red",10);

        weightInputsArray.push({
          X1: sourceInput,
          H2: destinationInput,
          W1: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₃") {
        drawArrow(ctx, 100, 98, 210, 215, 2, "white");
        drawTextRotate(180,168,weightInput,"16px 'Times New Roman', Times, serif","red",30);
        weightInputsArray.push({
          X1: sourceInput,
          H3: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "X₂" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 170, 210, 60, 2, "white");
        drawTextRotate(115,140,weightInput,"16px 'Times New Roman', Times, serif","yellow",-60);
         weightInputsArray.push({
          X2: sourceInput,
          H1: destinationInput,
          W2: weightInput,
        });

       nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 170, 210, 135, 2, "white");
        drawTextRotate(170,136,weightInput,"16px 'Times New Roman', Times, serif","yellow",-20);
         weightInputsArray.push({
          X2: sourceInput,
          H2: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 170, 210, 220, 2, "white");
        drawTextRotate(135,180,weightInput,"16px 'Times New Roman', Times, serif","yellow",10);
         weightInputsArray.push({
          X2: sourceInput,
          H3: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "H₁" && destinationInput === "Y₁") {
        drawArrow(ctx, 248, 55, 350, 131, 2, "white");
        drawTextRotate(285,75,weightInput,"16px 'Times New Roman', Times, serif","limegreen",40);
       
        weightInputsArray.push({
          H1: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₁") {
        drawArrow(ctx, 248, 135, 350, 135, 2, "white");
        drawTextRotate(280,127,weightInput,"16px 'Times New Roman', Times, serif","limegreen",0);
       
        weightInputsArray.push({
          H2: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₃" && destinationInput === "Y₁") {
        drawArrow(ctx, 248, 222, 350, 139, 2, "white");
        drawTextRotate(288,175,weightInput,"16px 'Times New Roman', Times, serif","limegreen",-30);
         
        weightInputsArray.push({
          H3: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
        
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      weight.value = "";
      var table = document.getElementById("myTable");
      var rowCount = table.rows.length - 1;

      var row = table.insertRow(-1);

      var cell0 = row.insertCell(0);
      cell0.innerHTML = ++rowCount;

      var cell2 = row.insertCell(1);
      cell2.innerHTML = sourceInput;

      var cell3 = row.insertCell(2);
      cell3.innerHTML = destinationInput;

      var cell4 = row.insertCell(3);
      cell4.innerHTML = weightInput;

      var tableCompute = document.getElementById("myTableCompute");
      var rowCountCompute = tableCompute.rows.length - 1;

      var rowCompute = tableCompute.insertRow(-1);

      var cell0Compute = rowCompute.insertCell(0);
      cell0Compute.innerHTML = ++rowCountCompute;

      var cell2Compute = rowCompute.insertCell(1);
      cell2Compute.innerHTML = sourceInput;

      var cell3Compute = rowCompute.insertCell(2);
      cell3Compute.innerHTML = destinationInput;

      var cell4Compute = rowCompute.insertCell(3);
      cell4Compute.innerHTML = weightInput;

      cellValuesArray.push({
        SNo: cell0Compute.innerHTML,
        source: cell2Compute.innerHTML,
        destination: cell3Compute.innerHTML,
        weight: cell4Compute.innerHTML,
      });

      var tablecompute = document.getElementById("myTableCompute");
      console.log(tablecompute);
      var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

      console.log(tbodycompute);
      var rowscompute = tbodycompute.getElementsByTagName("tr");

      for (var i = 0; i < rowscompute.length; i++) {
        var rowcompute = rowscompute[i];
        var cellscompute = rowcompute.getElementsByTagName("td");
        console.log(rowcompute);
        console.log(cellscompute);
        for (var j = 0; j < cellscompute.length; j++) {
          var cellcompute = cellscompute[j];
          if (cellcompute.innerHTML == "H₁" && j == 2) {
            for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 
          }
        }
      }


      if (table.rows.length == 7) {
        alerts1('success','Nodes of input & hidden layer are connected!!!','Now connect the nodes of the hidden layer (H<sub>n</sub>) to the nodes of the output layer (Y<sub>n</sub>) using the same procedure.');
        document.getElementById("source").innerHTML = "";
        document.getElementById("destination").innerHTML = "";
        var sourceOptions = [
          { value: "H₁", text: "H₁" },
          { value: "H₂", text: "H₂" },
          { value: "H₃", text: "H₃" },
        ];

        // Options for the destination select
        var destinationOptions = [{ value: "Y₁", text: "Y₁" }];

        // Append options to the source select
        sourceOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          source.add(newOption);
        });

        // Append options to the destination select
        destinationOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          destination.add(newOption);
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (table.rows.length == 10) {
        connectSubmitButtonEnabled.disabled = true;
        alertNEXT();
      }

      break;

    case JSON.stringify(["2", "3", "2"]):
      // Add values to the array
      values.push([sourceInput, destinationInput]);

      if (sourceInput === "X₁" && destinationInput === "H₁") {
        drawArrow(ctx, 100, 98, 208, 55, 2, "white");
        drawTextRotate(145,70,weightInput,"16px 'Times New Roman', Times, serif","red",-15);
    
        weightInputsArray.push({
          X1: sourceInput,
          H1: destinationInput,
          W1: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₂") {
        drawArrow(ctx, 100, 98, 210, 135, 2, "white");
        drawTextRotate(140,105,weightInput,"16px 'Times New Roman', Times, serif","red",10);
        weightInputsArray.push({
          X1: sourceInput,
          H2: destinationInput,
          W1: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₁" && destinationInput === "H₃") {
        drawArrow(ctx, 100, 98, 210, 215, 2, "white");
        drawTextRotate(180,168,weightInput,"16px 'Times New Roman', Times, serif","red",30);
        weightInputsArray.push({
          X1: sourceInput,
          H3: destinationInput,
          W1: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "X₂" && destinationInput === "H₁") {
        drawArrow(ctx, 99, 170, 210, 60, 2, "white");
        drawTextRotate(115,140,weightInput,"16px 'Times New Roman', Times, serif","yellow",-60);

        weightInputsArray.push({
          X2: sourceInput,
          H1: destinationInput,
          W2: weightInput,
        });
        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₂") {
        drawArrow(ctx, 99, 170, 210, 135, 2, "white");
        drawTextRotate(170,136,weightInput,"16px 'Times New Roman', Times, serif","yellow",-20);
        weightInputsArray.push({
          X2: sourceInput,
          H2: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }
      if (sourceInput === "X₂" && destinationInput === "H₃") {
        drawArrow(ctx, 99, 170, 210, 220, 2, "white");
        drawTextRotate(135,180,weightInput,"16px 'Times New Roman', Times, serif","yellow",10);

        weightInputsArray.push({
          X2: sourceInput,
          H3: destinationInput,
          W2: weightInput,
        });

        nullSelectAppend();
        arrayFunctionForSelect();
      }

      if (sourceInput === "H₁" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 50, 360, 95, 2, "white");
        drawTextRotate(300,63,weightInput,"16px 'Times New Roman', Times, serif","limegreen",20);
        weightInputsArray.push({
          H1: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 135, 360, 103, 2, "white");
        drawTextRotate(270,118,weightInput,"16px 'Times New Roman', Times, serif","limegreen",-10);
    
        weightInputsArray.push({
          H2: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₃" && destinationInput === "Y₁") {
        drawArrow(ctx, 247.5, 230, 360, 111, 2, "white");
        drawTextRotate(267,200,weightInput,"16px 'Times New Roman', Times, serif","limegreen",-45);
       

        weightInputsArray.push({
          H3: sourceInput,
          Y1: destinationInput,
          W1: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }

      if (sourceInput === "H₁" && destinationInput === "Y₂") {
        drawArrow(ctx, 247.5, 50, 360, 163, 2, "white");
        drawTextRotate(295,90,weightInput,"16px 'Times New Roman', Times, serif","limegreen",50);
      
        weightInputsArray.push({
          H1: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });
      
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₂" && destinationInput === "Y₂") {
        drawArrow(ctx, 247.5, 135, 360, 173, 2, "white");
        drawTextRotate(285,137,weightInput,"16px 'Times New Roman', Times, serif","limegreen",20);
       
        weightInputsArray.push({
          H2: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (sourceInput === "H₃" && destinationInput === "Y₂") {
        drawArrow(ctx, 247.5, 230, 360, 178, 2, "white");
        drawTextRotate(293,199,weightInput,"16px 'Times New Roman', Times, serif","limegreen",-20);
     
        weightInputsArray.push({
          H3: sourceInput,
          Y2: destinationInput,
          W2: weightInput,
        });
     
        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }

      weight.value = "";
      var table = document.getElementById("myTable");
      var rowCount = table.rows.length - 1;

      var row = table.insertRow(-1);

      var cell0 = row.insertCell(0);
      cell0.innerHTML = ++rowCount;

     var cell2 = row.insertCell(1);
      cell2.innerHTML = sourceInput;

      var cell3 = row.insertCell(2);
      cell3.innerHTML = destinationInput;

      var cell4 = row.insertCell(3);
      cell4.innerHTML = weightInput;

      var tableCompute = document.getElementById("myTableCompute");
      var rowCountCompute = tableCompute.rows.length - 1;

      var rowCompute = tableCompute.insertRow(-1);

      var cell0Compute = rowCompute.insertCell(0);
      cell0Compute.innerHTML = ++rowCountCompute;

      var cell2Compute = rowCompute.insertCell(1);
      cell2Compute.innerHTML = sourceInput;

      var cell3Compute = rowCompute.insertCell(2);
      cell3Compute.innerHTML = destinationInput;

      var cell4Compute = rowCompute.insertCell(3);
      cell4Compute.innerHTML = weightInput;

      var tablecompute = document.getElementById("myTableCompute");
      console.log(tablecompute);
      var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

      console.log(tbodycompute);
      var rowscompute = tbodycompute.getElementsByTagName("tr");

      for (var i = 0; i < rowscompute.length; i++) {
        var rowcompute = rowscompute[i];
        var cellscompute = rowcompute.getElementsByTagName("td");
        console.log(rowcompute);
        console.log(cellscompute);
        for (var j = 0; j < cellscompute.length; j++) {
          var cellcompute = cellscompute[j];
          if (cellcompute.innerHTML == "H₁" && j == 2) {
            for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 
          }
        }
      }

      if (table.rows.length == 7) {
        alerts1('success','Nodes of input & hidden layer are connected!!!','Now connect the nodes of the hidden layer (H<sub>n</sub>) to the nodes of the output layer (Y<sub>n</sub>) using the same procedure.');
        document.getElementById("source").innerHTML = "";
        document.getElementById("destination").innerHTML = "";
        var sourceOptions = [
          { value: "H₁", text: "H₁" },
          { value: "H₂", text: "H₂" },
          { value: "H₃", text: "H₃" },
        ];

        // Options for the destination select
        var destinationOptions = [
          { value: "Y₁", text: "Y₁" },
          { value: "Y₂", text: "Y₂" },
        ];

        // Append options to the source select
        sourceOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          source.add(newOption);
        });

        // Append options to the destination select
        destinationOptions.forEach(function (option) {
          var newOption = new Option(option.text, option.value);
          destination.add(newOption);
        });

        var nullOptionSource = new Option("NULL", "");
        nullOptionSource.hidden = true;
        nullOptionSource.selected = true;
        source.add(nullOptionSource);

        var nullOptionDestination = new Option("NULL", "");
        nullOptionDestination.hidden = true;
        nullOptionDestination.selected = true;
        destination.add(nullOptionDestination);
      }
      if (table.rows.length == 13) {
        connectSubmitButtonEnabled.disabled = true;

        alertNEXT();
      }
      break;

    default:
      console.log("Array not found");
      break;
  }
}

controlFirstTab.addEventListener("click", () => {
  controlFirstDiv.style.display = "block";
  nodeCreation.style.display = "block";
  terminologyDiv.style.display = "block";
  networkDiv.style.display = "none";
  controlsDiv.style.display = "none";
  observationTableDiv.style.display = "none";
  networkTab.style.backgroundColor = "#444648";
  controlFirstTab.style.backgroundColor = "#e0e0e0";
  controlFirstTab.style.color = "black";
  networkTab.style.color = "white";
  document.getElementById('createimg').src='images/create.png';
  document.getElementById('matter').style.display="none";
  document.getElementById('sec').style.display="flex";
  document.querySelector('.container').style.backgroundImage = 'none';
  
});

function alertNEXT()
{
  Swal.fire({
    icon: "success",
 title:'All nodes connected!!!',
    allowOutsideClick: false,
    allowEscapeKey: false,
    html:'Now click on <b style="color:#FF6600">NEXT</b> button to perform <b style="color:#FF6600">Forward Propagation</b>.',
             customClass: {
      container: "firstContainer",
      popup: "swal-popup",
title: "swal-title",
content: "swal-content",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      nextButtontwodisabled.style.display = "block";
      nextButtontwoenabled.style.display = "none";
      let x=document.getElementsByClassName('controller-inputs-select')
      for (var i = 0; i < x.length; i++) {
        x[i].disabled = true; 
    }
    document.getElementById('weight').disabled=true;
    } else {
      // The user dismissed the dialog or clicked outside
      console.log("User dismissed the dialog");
    }
  });
}

//  ANIMATIONS SECTION

function drawCircle(x, y, radius, fillStyle, strokeStyle) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = strokeStyle;
  ctx.fill();
  ctx.stroke();
}

function drawCircleForNode(x, y, radius, fillStyle, strokeStyle) {
  let canvas = document.getElementById("myCanvasNode");
  let ctxNode = canvas.getContext("2d");

  ctxNode.beginPath();
  ctxNode.arc(x, y, radius, 0, 2 * Math.PI);
  ctxNode.fillStyle = fillStyle;
  ctxNode.strokeStyle = strokeStyle;
  ctxNode.fill();
  ctxNode.stroke();
}

function drawText(x, y, text, font, color) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

function drawTextForNode(x, y, text, font, color) {
  let canvas = document.getElementById("myCanvasNode");
  let ctxNode = canvas.getContext("2d");
  ctxNode.font = font;
  ctxNode.fillStyle = color;
  ctxNode.fillText(text, x, y);
}

function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color) {
  // variables to be used when creating the arrow
  var angle = Math.atan2(toy - fromy, tox - fromx);

  ctx.save();
  ctx.strokeStyle = color;

  ctx.beginPath();
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.lineWidth = arrowWidth;
  ctx.stroke();

  // calculate head length based on arrow width
  var headlen = arrowWidth * 4;

  // starting a new path for the arrowhead
  ctx.beginPath();
  ctx.moveTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  // path from the side point of the arrow to the other side point
  ctx.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 7),
    toy - headlen * Math.sin(angle + Math.PI / 7)
  );

  // closing the path to form the arrowhead
  ctx.closePath();

  // fill the arrowhead with the same color as the stroke
  ctx.fillStyle = color;
  ctx.fill();

  // draws the paths created above
  ctx.stroke();
  ctx.restore();
}

function drawArrowForNode(ctxNode, fromx, fromy, tox, toy, arrowWidth, color) {
  //variables to be used when creating the arrow
  var headlen = 10;
  var angle = Math.atan2(toy - fromy, tox - fromx);

  ctxNode.save();
  ctxNode.strokeStyle = color;

  //starting path of the arrow from the start square to the end square
  //and drawing the stroke
  ctxNode.beginPath();
  ctxNode.moveTo(fromx, fromy);
  ctxNode.lineTo(tox, toy);
  ctxNode.lineWidth = arrowWidth;
  ctxNode.stroke();

  //starting a new path from the head of the arrow to one of the sides of
  //the point
  ctxNode.beginPath();
  ctxNode.moveTo(tox, toy);
  ctxNode.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  //path from the side point of the arrow, to the other side point
  ctxNode.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 7),
    toy - headlen * Math.sin(angle + Math.PI / 7)
  );

  //path from the side point back to the tip of the arrow, and then
  //again to the opposite side point
  ctxNode.lineTo(tox, toy);
  ctxNode.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  // closing the path to form the arrowhead
  ctx.closePath();

  // fill the arrowhead with the same color as the stroke
  ctx.fillStyle = color;
  ctx.fill();

  //draws the paths created above
  ctxNode.stroke();
  ctxNode.restore();
}

function drawTextRotate(x, y, text, font, color, angle) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.save(); // Save the current transformation state

  ctx.translate(x, y); // Move the canvas origin to (x, y)
  ctx.rotate((angle * Math.PI) / 180); // Apply the rotation (convert degrees to radians)

  ctx.textAlign = "center"; // Center the text around the (x, y) position
  ctx.textBaseline = "middle"; // Align the middle of the text with the (x, y) position

  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text, 0, 0); // (0, 0) because we've translated the canvas origin to (x, y)

  ctx.restore(); // Restore the original transformation state
}

// WORKFLOW OF RESET BUTTON OF CONNECT SECTION

function resetFunction() {
  var arrayForNodeCompute = [
    controlInput.value,
    controlHidden.value,
    controlOutput.value,
  ];

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arrayFuntion();

  // Clear the observation table
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
  var tableCompute = document.getElementById("myTableCompute");
  var rowCountCompute = tableCompute.rows.length;
  for (var i = rowCountCompute - 1; i > 0; i--) {
    tableCompute.deleteRow(i);
  }

  connectSubmitButtonEnabled.disabled = false;
  nextButtontwodisabled.style.display = "none";
  nextButtontwoenabled.style.display = "block";

  nullSelectAppend();
  arrayFunctionForSelect();
  // precontrollerSubmitThreeOne();

  values = [];
  weightInputsArray = [];
  weight.value = "";

  let elementss=document.getElementsByClassName('labels');
  for (var i = 0; i < elementss.length; i++) {
    elementss[i].style.fontSize = "28px"; // Change font size to 20px
}

  let x=document.getElementsByClassName('controller-inputs-select')
    for (var i = 0; i < x.length; i++) {
      x[i].disabled = false; 
  }
  document.getElementById('weight').disabled=false;
  if (JSON.stringify(arrayForNodeCompute) === JSON.stringify(["2", "4", "1"])) {
    drawText(38,115,selectedValuesForTwoOneValues.X1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,184,selectedValuesForTwoOneValues.X2,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(415, 135,selectedValuesForTwoOneValues.Y1, "22px 'Times New Roman', Times, serif", "#FF6600");
  } else if (
    JSON.stringify(arrayForNodeCompute) === JSON.stringify(["2", "4", "2"])
  ) {
    console.log(arrayForNodeCompute, " arrayForNodeCompute for case 2");
    drawText(38,110,selectedValuesForTwoTwoValues.X1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,179,selectedValuesForTwoTwoValues.X2,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(400,100,selectedValuesForTwoTwoValues.Y1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(400,180,selectedValuesForTwoTwoValues.Y2,"22px 'Times New Roman', Times, serif","#FF6600");

  } else if (
    JSON.stringify(arrayForNodeCompute) === JSON.stringify(["2", "3", "1"])
  ) {
    console.log(arrayForNodeCompute, " arrayForNodeCompute for case 3");

    drawText(38,105,selectedValuesForTwoOneValues.X1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,174,selectedValuesForTwoOneValues.X2,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(400,140,selectedValuesForTwoOneValues.Y1,"22px 'Times New Roman', Times, serif","#FF6600");
 
  } else if (
    JSON.stringify(arrayForNodeCompute) === JSON.stringify(["2", "3", "2"])
  ) {
    console.log(arrayForNodeCompute, " arrayForNodeCompute for case 4");

    drawText(38,105,selectedValuesForTwoTwoValues.X1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,174,selectedValuesForTwoTwoValues.X2,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(410, 100,selectedValuesForTwoTwoValues.Y2,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(410,170,selectedValuesForTwoTwoValues.Y2,"22px 'Times New Roman', Times, serif","#FF6600");
  } else if (
    JSON.stringify(arrayForNodeCompute) === JSON.stringify(["3", "4", "1"])
  ) {
    console.log(arrayForNodeCompute, " arrayForNodeCompute for case 5");

    drawText(38,75,selectedValuesForThreeOneValues.X1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,144,selectedValuesForThreeOneValues.X2,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,213,selectedValuesForThreeOneValues.X3,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(410, 140,selectedValuesForThreeOneValues.Y1,"22px 'Times New Roman', Times, serif","#FF6600");
  } 
  else if (
    JSON.stringify(arrayForNodeCompute) === JSON.stringify(["3", "4", "2"])
  ) {
    console.log(arrayForNodeCompute, " arrayForNodeCompute for case 6");

    drawText(38,75,selectedValuesForThreeTwoValues.X1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,144,selectedValuesForThreeTwoValues.X2,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,213,selectedValuesForThreeTwoValues.X3,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(400, 100,selectedValuesForThreeTwoValues.Y1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(400,180,selectedValuesForThreeTwoValues.Y2,"22px 'Times New Roman', Times, serif","#FF6600");
  } 
  else if (
    JSON.stringify(arrayForNodeCompute) === JSON.stringify(["3", "3", "1"])
  ) {
    console.log(arrayForNodeCompute, " arrayForNodeCompute for case 7");

    drawText(38,75,selectedValuesForThreeOneValues.X1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,144,selectedValuesForThreeOneValues.X2,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,213,selectedValuesForThreeOneValues.X3,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(410, 140,selectedValuesForThreeOneValues.Y1,"22px 'Times New Roman', Times, serif","#FF6600");
  } 
  else if (
    JSON.stringify(arrayForNodeCompute) === JSON.stringify(["3", "3", "2"])
  ) {
    console.log(arrayForNodeCompute, " arrayForNodeCompute for case 8");

    drawText(38,75,selectedValuesForThreeTwoValues.X1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,144,selectedValuesForThreeTwoValues.X2,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(38,213,selectedValuesForThreeTwoValues.X3,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(405, 100,selectedValuesForThreeTwoValues.Y1,"22px 'Times New Roman', Times, serif","#FF6600");
    drawText(405,170,selectedValuesForThreeTwoValues.Y2,"22px 'Times New Roman', Times, serif","#FF6600");
  } 
}

function nullSelectAppend() {
  document.getElementById("source").innerHTML = "";
  document.getElementById("destination").innerHTML = "";

  var nullOptionSource = new Option("NULL", "");
  nullOptionSource.hidden = true;
  nullOptionSource.selected = true;
  source.add(nullOptionSource);

  var nullOptionDestination = new Option("NULL", "");
  nullOptionDestination.hidden = true;
  nullOptionDestination.selected = true;
  destination.add(nullOptionDestination);
}

function precontrollerReset() {
  document.getElementById('resetInput').disabled=true;
  nodeone.value = "NULL";
  nodetwo.value = "NULL";
  nodethree.value = "NULL";
  nodeYone.value="NULL";
  nodeYtwo.value="NULL";

  enableSubmitThreeOneButton.disabled = false;
  enableSubmitTwoOneButton.disabled = false;
  enableSubmitTwoTwoButton.disabled = false;
  enableSubmitThreeTwoButton.disabled = false;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arrayFuntion();
  enableNextButton.disabled=true;

  let x=document.getElementsByClassName('controller-inputs-first')
  for (var i = 0; i < x.length; i++) {
    x[i].disabled = false; 
}


}

function precontrollerNext() {
  let elementss=document.getElementsByClassName('labels');
  for (var i = 0; i < elementss.length; i++) {
    elementss[i].style.fontSize = "28px"; // Change font size to 20px
}
let x=document.getElementsByClassName('controller-inputs-first')
for (var i = 0; i < x.length; i++) {
  x[i].disabled = false; 
}
  preControllersContainerId.style.display = "none";
  controllersId.style.display = "block";
  controllersBtnId.style.display = " flex";
}

function nextTwoFunction() {
  disableComputeTab.style.display = "none";
  enableComputeTab.style.display = "flex";
  enableComputeTab.style.backgroundColor = "rgb(224, 224, 224)";
  enableComputeTab.style.color = "black";
  networkTab.style.display = "flex";
  networkTabDisabled.style.display = "none";
  controlsDiv.style.display = "none";
  observationSmallDiv.style.display = "block";
  observationTableDiv.style.display = "none";
  calculationDiv.style.display = "block";
  networkDiv.style.marginLeft = "461px";
  showBiasAlert();
}

function alertcompute(icon,y,resultFinal,resultSigmoidFixed)
{
  Swal.fire({
    icon: icon,
    title: 'A simple neuron performs two functions: summation and application of activation function',
    html: `<img src="images/output.png" style="width:190px">
<br>Summation value for ${y} = <b style="color:#FF6600;">${resultFinal}</b><br>
Now, activate the input signal using activation function. Current example uses sigmoid activation function at nodes:<br> 
<img src="images/sigmoid.png" style="width: 90px;margin-top:5px;margin-left:-85px" alt="sigmoid function"> 
<p style="margin-top: -29px;
margin-left: 214px;
position: absolute;"> = </p><b style="margin-top:11px;position:absolute;color:#FF6600;margin-left:35px"> ${resultSigmoidFixed}</b><br>
Now, click on <b style="color:#FF6600">NEXT</b> Button.
`,
    allowOutsideClick: false,
    allowEscapeKey: false,
    customClass: {
      container: "firstContainer",
      icon:"swal-icon",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
    },
  });
}

const errorList=[];
function alertcompute2(icon,y,Y1,resultFinal,resultSigmoidFixed)
{
  Swal.fire({
    icon: icon,
    title: 'A simple neuron performs two functions: summation and application of activation function',
    html: `<img src="images/output.png" style="width:190px">
<br>Summation value for ${y} = <b style="color:#FF6600;">${resultFinal}</b></p>
<p>Now, activate the input signal using activation function. Current example uses sigmoid activation function at nodes:<br>  <img src="images/sigmoid.png" style="width: 90px; margin-top : 5px;" alt="sigmoid function"><p style="margin-top: -46px;
margin-left: 250px;
position: absolute;"> = </p> <b style="margin-top:-47px;position:absolute;color:#FF6600;margin-left:63px"> ${resultSigmoidFixed}</b>
`,
    
    customClass: {
      container: "firstContainer",
      icon:"swal-icon",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
      allowOutsideClick: false,
    allowEscapeKey: false,
    },
  }).then((result) => {
    if (result.isConfirmed) {
      e = Y1-resultSigmoidFixed
      res=(e*e).toFixed(4);
      errorList.push(parseFloat(res));

        Swal.fire({
          icon: 'error',
          title: 'Squared Error!',
          html: `The squared differences between the actual and predicted value = <b style="color:#FF6600;"> ${res}</b><br>
      `,
          allowOutsideClick: false,
    allowEscapeKey: false,
          customClass: {
            container: "firstContainer",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            enableAnalyseTab.style.display = "flex";
            enableAnalyseTab.style.backgroundColor = "rgb(224, 224, 224)";
            enableAnalyseTab.style.color = "black";
            disableAnalyseTab.style.display = "none";
            disableAnalyseTab.style.color = "black";
            enableComputeTab.style.display = "none";
            disableComputeTab.style.display = "flex";

            observationSmallDiv.style.display='none';
            networkDiv.style.display='none';

            //shownetworkDivAtDifferentLocation
            const newX = 10;
            const newY = 150;
        
            // Set the new position
            networkDiv.style.position = 'absolute';
            networkDiv.style.left = newX + 'px';
            networkDiv.style.top = newY + 'px';
            networkDiv.style.marginLeft='0px';
            // Show the div
            networkDiv.style.display = 'block';

            calculationDiv.style.display='none';
            lossDiv.style.display='block';
            document.getElementById('analysebuttons').style.display='flex';
          }
        })       ;



     
      ;}  
   
    
  });
}

function alertcompute3(icon,y,Y1,resultFinal,resultSigmoidFixed)
{
  Swal.fire({
    icon: icon,
    title: 'A simple neuron performs two functions: summation and application of activation function',
    html: `<img src="images/output.png" style="width:190px">
<br>Summation value for ${y} = <b style="color:#FF6600;">${resultFinal}</b></p>
<p>Now, activate the input signal using activation function. Current example uses sigmoid activation function at nodes:<br>  <img src="images/sigmoid.png" style="width: 90px; margin-top : 5px;" alt="sigmoid function"><p style="margin-top: -46px;
margin-left: 250px;
position: absolute;"> = </p> <b style="margin-top:-47px;position:absolute;color:#FF6600;margin-left:63px"> ${resultSigmoidFixed}</b>
`, 
allowOutsideClick: false,
    allowEscapeKey: false,
    customClass: {
      container: "firstContainer",
      icon:"swal-icon",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      e=(Y1-resultSigmoidFixed);
      error= (e*e).toFixed(4);
      errorList.push(parseFloat(error));
      if(error==0)
      {
        alerts1('info','No Error!!',`The squared differences between the actual and predicted value is 0.`)
      }
      else
      {
        Swal.fire({
          icon: 'error',
          title: 'Squared Error!',
          html: `The squared differences between the actual and predicted value = <b style="color:#FF6600;"> ${error}</b><br>
      Now, click on <b style="color:#FF6600">NEXT</b> Button.
      `,
          allowOutsideClick: false,
    allowEscapeKey: false,
          customClass: {
            container: "firstContainer",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
          },
        });
      }
     
      ;} 
   
    
  });
}
let sum=0;

function loss()
{
  alerts1('info','','The principle is that a lower loss corresponds to a better prediction.');
  for(i=0;i<errorList.length;i++)
  {
    sum=sum+errorList[i];
  }
  mse=sum/errorList.length;
  document.getElementById('expressionMSE').innerHTML='MSE = ' + mse;
  document.getElementById('lossButton').disabled=true;
  document.getElementById('print').disabled=false;
}


function noneEquationX3()
{
  x1.style.display = "none";
  x2.style.display = "none";
  x3.style.display = "none";
  w1.style.display = "none";
  w2.style.display = "none";
  w3.style.display = "none";
  plus2.style.display = "none";
  plus3.style.display = "none";
  multiply2.style.display = "none";
  multiply3.style.display = "none";
  multiply.style.display = "none";
  plus.style.display = "none";
  ansSpan.style.display = "block";
  ansSpan.style.fontSize = "18px";
}

function noneEquationH4()
{
          h1.style.display = "none";
          h2.style.display = "none";
          h3.style.display = "none";
          h4.style.display = "none";
          w1.style.display = "none";
          w2.style.display = "none";
          w3.style.display = "none";
          w4.style.display = "none";
          plus2.style.display = "none";
          plus3.style.display = "none";
          plus1.style.display = "none";
          plus.style.display = "none";
          multiply2.style.display = "none";
          multiply3.style.display = "none";
          multiply1.style.display = "none";
          multiply.style.display = "none";
          ansSpan.style.display = "block";
          ansSpan.style.fontSize = "18px";
}

function noneEquationH3()
{
  h1.style.display = "none";
  h2.style.display = "none";
  h3.style.display = "none";
  w1.style.display = "none";
  w2.style.display = "none";
  w3.style.display = "none";
  plus2.style.display = "none";
  plus3.style.display = "none";
  plus1.style.display = "none";
  plus.style.display = "none";
  multiply2.style.display = "none";
  multiply3.style.display = "none";
  multiply1.style.display = "none";
  multiply.style.display = "none";
  ansSpan.style.display = "block";
  ansSpan.style.fontSize = "18px";
}

function noneEquationX2()
{
  x1.style.display = "none";
  x2.style.display = "none";
  w1.style.display = "none";
  w2.style.display = "none";
  plus2.style.display = "none";
  plus3.style.display = "none";
  multiply2.style.display = "none";
  multiply3.style.display = "none";
  ansSpan.style.display = "block";
  ansSpan.style.fontSize = "18px";
}

let formData = [];
let currentStep = 0;

var counter = 1;
var hValuesObject = {};
function submitForm() {
  var isFormValid = true;
  var isFormValidForOutput = true;
  var formDataObject = {}; // Create an object to hold the form values
  var formDataObjectForOutput = {}; // Create an object to hold the form values
  var arrayForNodeCompute = [
    controlInput.value,
    controlHidden.value,
    controlOutput.value,
  ];

  switch (JSON.stringify(arrayForNodeCompute)) {
    // ARRAY 1

    case JSON.stringify(["3", "4", "2"]):
      const requiredInputsA1 = ["x1", "w1", "x2", "w2", "x3", "w3"];
      const requiredInputsForOutputA1 = [
        "h1",
        "w1",
        "h2",
        "w2",
        "h3",
        "w3",
        "h4",
        "w4",
      ];

   

      if (counter !== 9 && counter !== 11) {
        for (const inputId of requiredInputsA1) {
          const inputElement = document.getElementById(inputId);
          if (!inputElement.value) {
            inputElement.classList.add("error-border");
            isFormValid = false;
          } else {
            inputElement.classList.remove("error-border");
            formDataObject[inputId.toUpperCase()] = parseFloat(
              inputElement.value
            );
          }
        }
      }

      for (const outputId of requiredInputsForOutputA1) {
        const outputElement = document.getElementById(outputId);
        if (!outputElement.value) {
          outputElement.classList.add("error-border");
          isFormValidForOutput = false;
        } else {
          outputElement.classList.remove("error-border");
          formDataObjectForOutput[outputId.toUpperCase()] = parseFloat(
            outputElement.value
          );
        }
      }

      if (isFormValid) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }
      if (isFormValidForOutput) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }

      if (!isFormValid) {
        // Display an error alert using Swal.fire
        alerts1('error','','Please enter the required value in the highlighted Input box and then click on <b style="color:#FF6600">SUBMIT</b> button.');
        
        return;
      }
     
      // Only enable the "NEXT" button if the form data is valid
      document.querySelector(
        ".controllers-btn-compute button:nth-child(3)"
      ).disabled = false;

      if (counter === 1) {
        var W1_X1_H1, W2_X2_H1, W3_X3_H1;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H1) {
            W1_X1_H1 = obj.W1;
          }
          if (obj.X2 && obj.H1) {
            W2_X2_H1 = obj.W2;
          }
          if (obj.X3 && obj.H1) {
            W3_X3_H1 = obj.W3;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeTwoValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeTwoValues.X3) &&
          formDataObject.W1 === W1_X1_H1 &&
          formDataObject.W2 === W2_X2_H1 &&
          formDataObject.W3 === W3_X3_H1
        ) {
          console.log("successful");
          console.log(biasValue, "Bias Value");

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);

          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of H1", resultSigmoidFixed);
          drawText(252,30,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          noneEquationX3()
           
          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          inputGroup.style.paddingTop = "60px";

          hValuesObject["H1"] = resultSigmoidFixed;
          counter = 2;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₁',resultFinal,resultSigmoidFixed);
       
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeTwoValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeTwoValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeTwoValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H1) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      if (counter === 3) {
        console.log("clicked on next Button Second time");

        var W1_X1_H2, W2_X2_H2, W3_X3_H2;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H2) {
            W1_X1_H2 = obj.W1;
          }
          if (obj.X2 && obj.H2) {
            W2_X2_H2 = obj.W2;
          }
          if (obj.X3 && obj.H2) {
            W3_X3_H2 = obj.W3;
          }
        });

      
        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeTwoValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeTwoValues.X3) &&
          formDataObject.W1 === W1_X1_H2 &&
          formDataObject.W2 === W2_X2_H2 &&
          formDataObject.W3 === W3_X3_H2
        ) {
          console.log("successful");
          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of H2", resultSigmoidFixed);
          drawText(212,71,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          noneEquationX3()

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          inputGroup.style.paddingTop = "60px";

          hValuesObject["H2"] = resultSigmoidFixed;
          counter = 4;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₂',resultFinal,resultSigmoidFixed);

        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          
          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeTwoValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeTwoValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeTwoValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H2) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H2) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }
      if (counter === 5) {
        var W1_X1_H3, W2_X2_H3, W3_X3_H3;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H3) {
            W1_X1_H3 = obj.W1;
          }
          if (obj.X2 && obj.H3) {
            W2_X2_H3 = obj.W2;
          }
          if (obj.X3 && obj.H3) {
            W3_X3_H3 = obj.W3;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeTwoValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeTwoValues.X3) &&
          formDataObject.W1 === W1_X1_H3 &&
          formDataObject.W2 === W2_X2_H3 &&
          formDataObject.W3 === W3_X3_H3
        ) {
          console.log("successful");
          console.log(
            "Result of H3",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          drawText(212,145,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          noneEquationX3()

          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H3"] = resultSigmoidFixed;
          counter = 6;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₃',resultFinal,resultSigmoidFixed);

        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

        
          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeTwoValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeTwoValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeTwoValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H3) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H3) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H3) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }
      if (counter === 7) {
        var W1_X1_H4, W2_X2_H4, W3_X3_H4;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H4) {
            W1_X1_H4 = obj.W1;
          }
          if (obj.X2 && obj.H4) {
            W2_X2_H4 = obj.W2;
          }
          if (obj.X3 && obj.H4) {
            W3_X3_H4 = obj.W3;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeTwoValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeTwoValues.X3) &&
          formDataObject.W1 === W1_X1_H4 &&
          formDataObject.W2 === W2_X2_H4 &&
          formDataObject.W3 === W3_X3_H4
        ) {
          console.log("successful");
          console.log(
            "Result of H4",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              formDataObject.X3 * formDataObject.W3 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          drawText(212,220,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          noneEquationX3();

          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H4"] = resultSigmoidFixed;
          counter = 8;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          alertcompute('info','H₄',resultFinal,resultSigmoidFixed);
          
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');
;
          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeTwoValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeTwoValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeTwoValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H4) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H4) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W2 !== W3_X3_H4) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      if (counter === 9) {
        console.log("Submit button is clicked fourth time");
        var W1_H1_Y1, W1_H2_Y1, W1_H3_Y1, W1_H4_Y1;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y1) {
            W1_H1_Y1 = obj.W1;
          }
          if (obj.H2 && obj.Y1) {
            W1_H2_Y1 = obj.W1;
          }
          if (obj.H3 && obj.Y1) {
            W1_H3_Y1 = obj.W1;
          }
          if (obj.H4 && obj.Y1) {
            W1_H4_Y1 = obj.W1;
          }
        });

        console.log("W1 for H1 and Y1:", W1_H1_Y1);
        console.log("W1 for H2 and Y1:", W1_H2_Y1);
        console.log("W1 for H3 and Y1:", W1_H3_Y1);
        console.log("W1 for H4 and Y1:", W1_H4_Y1);

      

        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.H4 === parseFloat(hValuesObject.H4) &&
          formDataObjectForOutput.W1 === W1_H1_Y1 &&
          formDataObjectForOutput.W2 === W1_H2_Y1 &&
          formDataObjectForOutput.W3 === W1_H3_Y1 &&
          formDataObjectForOutput.W4 === W1_H4_Y1
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            formDataObjectForOutput.H4 * formDataObjectForOutput.W4 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y1", resultSigmoidFixed);
          drawText(355,70,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");
          
          noneEquationH4();

          inputGroup.style.paddingTop = "60px";
          inputGroup.style.marginLeft = "-20px";
          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          counter = 10;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          let Y1=parseFloat(selectedValuesForThreeTwoValues.Y1);
          alertcompute3('info','Y₁',Y1,resultFinalOutput,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }
          if (formDataObjectForOutput.H4 !== parseFloat(hValuesObject.H4)) {
            document.getElementById("h4").classList.add("error-border");
          }
          if (formDataObjectForOutput.W1 !== W1_H1_Y1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W1_H2_Y1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W1_H3_Y1) {
            document.getElementById("w3").classList.add("error-border");
          }
          if (formDataObjectForOutput.W4 !== W1_H4_Y1) {
            document.getElementById("w4").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });
          document.getElementById("h4").addEventListener("input", () => {
            document.getElementById("h4").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
          document.getElementById("w4").addEventListener("input", () => {
            document.getElementById("w4").classList.remove("error-border");
          });
        }
      }
      if (counter === 11) {
         var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        console.log("Submit button is clicked fourth time");
        var W2_H1_Y2, W2_H2_Y2, W2_H3_Y2, W2_H4_Y2;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y2) {
            W2_H1_Y2 = obj.W2;
          }
          if (obj.H2 && obj.Y2) {
            W2_H2_Y2 = obj.W2;
          }
          if (obj.H3 && obj.Y2) {
            W2_H3_Y2 = obj.W2;
          }
          if (obj.H4 && obj.Y2) {
            W2_H4_Y2 = obj.W2;
          }
        });

        console.log("W2 for H1 and Y2:", W2_H1_Y2);
        console.log("W2 for H2 and Y2:", W2_H2_Y2);
        console.log("W2 for H3 and Y2:", W2_H3_Y2);
        console.log("W2 for H4 and Y2:", W2_H4_Y2);

       
        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.H4 === parseFloat(hValuesObject.H4) &&
          formDataObjectForOutput.W1 === W2_H1_Y2 &&
          formDataObjectForOutput.W2 === W2_H2_Y2 &&
          formDataObjectForOutput.W3 === W2_H3_Y2 &&
          formDataObjectForOutput.W4 === W2_H4_Y2
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            formDataObjectForOutput.H4 * formDataObjectForOutput.W4 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y2", resultSigmoidFixed);
          drawText(355,150,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");

          noneEquationH4();
          
          inputGroup.style.paddingTop = "60px";
          inputGroup.style.marginLeft = "-20px";
          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          nextButtonCompute.disabled = true;

          let Y2=parseFloat(selectedValuesForThreeTwoValues.Y2)
          alertcompute2('info','Y₂',Y2,resultFinalOutput,resultSigmoidFixed);

            for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₂" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
            } 
            }
          }
        }


        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }
          if (formDataObjectForOutput.H4 !== parseFloat(hValuesObject.H4)) {
            document.getElementById("h4").classList.add("error-border");
          }
          if (formDataObjectForOutput.W1 !== W2_H1_Y2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W2_H2_Y2) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W2_H3_Y2) {
            document.getElementById("w3").classList.add("error-border");
          }
          if (formDataObjectForOutput.W4 !== W2_H4_Y2) {
            document.getElementById("w4").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });
          document.getElementById("h4").addEventListener("input", () => {
            document.getElementById("h4").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
          document.getElementById("w4").addEventListener("input", () => {
            document.getElementById("w4").classList.remove("error-border");
          });
        }
      }

      break;

    // ARRAY 2

    case JSON.stringify(["3", "4", "1"]):
      const requiredInputsA2 = ["x1", "w1", "x2", "w2", "x3", "w3"];
      const requiredInputsForOutputA2 = [
        "h1",
        "w1",
        "h2",
        "w2",
        "h3",
        "w3",
        "h4",
        "w4",
      ];

    

      if (counter !== 9) {
        for (const inputId of requiredInputsA2) {
          const inputElement = document.getElementById(inputId);
          if (!inputElement.value) {
            inputElement.classList.add("error-border");
            isFormValid = false;
          } else {
            inputElement.classList.remove("error-border");
            formDataObject[inputId.toUpperCase()] = parseFloat(
              inputElement.value
            );
          }
        }
      }

      for (const outputId of requiredInputsForOutputA2) {
        const outputElement = document.getElementById(outputId);
        if (!outputElement.value) {
          outputElement.classList.add("error-border");
          isFormValidForOutput = false;
        } else {
          outputElement.classList.remove("error-border");
          formDataObjectForOutput[outputId.toUpperCase()] = parseFloat(
            outputElement.value
          );
        }
      }

      

      if (!isFormValid) {
        // Display an error alert using Swal.fire
        alerts1('error','','Enter the required value in the highlighted Input box and then click on <b style="color:#FF6600">SUBMIT</b> button.');

        return;
      }
    
      // Only enable the "NEXT" button if the form data is valid
      document.querySelector(
        ".controllers-btn-compute button:nth-child(3)"
      ).disabled = false;

      if (counter === 1) {
        var W1_X1_H1, W2_X2_H1, W3_X3_H1;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H1) {
            W1_X1_H1 = obj.W1;
          }
          if (obj.X2 && obj.H1) {
            W2_X2_H1 = obj.W2;
          }
          if (obj.X3 && obj.H1) {
            W3_X3_H1 = obj.W3;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeOneValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeOneValues.X3) &&
          formDataObject.W1 === W1_X1_H1 &&
          formDataObject.W2 === W2_X2_H1 &&
          formDataObject.W3 === W3_X3_H1
        ) {
          console.log("successful");
          console.log(biasValue, "Bias Value");

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);

          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of H1", resultSigmoidFixed);
          drawText(252,30,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          noneEquationX3();

          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H1"] = resultSigmoidFixed;
          counter = 2;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;

         alertcompute('info','H₁',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeOneValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeOneValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeOneValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H1) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      if (counter === 3) {
        console.log("clicked on next Button Second time");

        var W1_X1_H2, W2_X2_H2, W3_X3_H2;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H2) {
            W1_X1_H2 = obj.W1;
          }
          if (obj.X2 && obj.H2) {
            W2_X2_H2 = obj.W2;
          }
          if (obj.X3 && obj.H2) {
            W3_X3_H2 = obj.W3;
          }
        });


        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeOneValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeOneValues.X3) &&
          formDataObject.W1 === W1_X1_H2 &&
          formDataObject.W2 === W2_X2_H2 &&
          formDataObject.W3 === W3_X3_H2
        ) {
          console.log("successful");
          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of H2", resultSigmoidFixed);
          drawText(212,71,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          noneEquationX3();

          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H2"] = resultSigmoidFixed;
          counter = 4;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;

          alertcompute('info','H₂',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeOneValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeOneValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeOneValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H2) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H2) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }
      if (counter === 5) {
        var W1_X1_H3, W2_X2_H3, W3_X3_H3;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H3) {
            W1_X1_H3 = obj.W1;
          }
          if (obj.X2 && obj.H3) {
            W2_X2_H3 = obj.W2;
          }
          if (obj.X3 && obj.H3) {
            W3_X3_H3 = obj.W3;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeOneValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeOneValues.X3) &&
          formDataObject.W1 === W1_X1_H3 &&
          formDataObject.W2 === W2_X2_H3 &&
          formDataObject.W3 === W3_X3_H3
        ) {
          console.log("successful");
          console.log(
            "Result of H3",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(212,145,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          noneEquationX3();

          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H3"] = resultSigmoidFixed;
          counter = 6;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;

          alertcompute('info','H₃',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeOneValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeOneValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeOneValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H3) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H3) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H3) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }
      if (counter === 7) {
        var W1_X1_H4, W2_X2_H4, W3_X3_H4;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H4) {
            W1_X1_H4 = obj.W1;
          }
          if (obj.X2 && obj.H4) {
            W2_X2_H4 = obj.W2;
          }
          if (obj.X3 && obj.H4) {
            W3_X3_H4 = obj.W3;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeOneValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeOneValues.X3) &&
          formDataObject.W1 === W1_X1_H4 &&
          formDataObject.W2 === W2_X2_H4 &&
          formDataObject.W3 === W3_X3_H4
        ) {
          console.log("successful");
          console.log(
            "Result of H4",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              formDataObject.X3 * formDataObject.W3 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);

          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(212,220,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          noneEquationX3();

          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H4"] = resultSigmoidFixed;
          counter = 8;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;

          alertcompute('info','H₄',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeOneValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeOneValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H4) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H4) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H4) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      if (counter === 9) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        

        console.log("Submit button is clicked fourth time");
        var W1_H1_Y1, W1_H2_Y1, W1_H3_Y1, W1_H4_Y1;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y1) {
            W1_H1_Y1 = obj.W1;
          }
          if (obj.H2 && obj.Y1) {
            W1_H2_Y1 = obj.W1;
          }
          if (obj.H3 && obj.Y1) {
            W1_H3_Y1 = obj.W1;
          }
          if (obj.H4 && obj.Y1) {
            W1_H4_Y1 = obj.W1;
          }
        });

        console.log("W1 for H1 and Y1:", W1_H1_Y1);
        console.log("W1 for H2 and Y1:", W1_H2_Y1);
        console.log("W1 for H3 and Y1:", W1_H3_Y1);
        console.log("W1 for H4 and Y1:", W1_H4_Y1);

     

        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.H4 === parseFloat(hValuesObject.H4) &&
          formDataObjectForOutput.W1 === W1_H1_Y1 &&
          formDataObjectForOutput.W2 === W1_H2_Y1 &&
          formDataObjectForOutput.W3 === W1_H3_Y1 &&
          formDataObjectForOutput.W4 === W1_H4_Y1
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            formDataObjectForOutput.H4 * formDataObjectForOutput.W4 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);

          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y1", resultSigmoidFixed);
          drawText(370,100,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");
          noneEquationH4();

          inputGroup.style.paddingTop = "60px";
          inputGroup.style.marginLeft = "-20px";
          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          // counter = 10;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          nextButtonCompute.disabled = true;
          
          let Y1=parseFloat(selectedValuesForThreeOneValues.Y1)
          alertcompute2('info','Y₁',Y1,resultFinalOutput,resultSigmoidFixed);
        
          for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
          
            } 
            }
          }
        }

        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }
          if (formDataObjectForOutput.H4 !== parseFloat(hValuesObject.H4)) {
            document.getElementById("h4").classList.add("error-border");
          }
          if (formDataObjectForOutput.W1 !== W1_H1_Y1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W1_H2_Y1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W1_H3_Y1) {
            document.getElementById("w3").classList.add("error-border");
          }
          if (formDataObjectForOutput.W4 !== W1_H4_Y1) {
            document.getElementById("w4").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });
          document.getElementById("h4").addEventListener("input", () => {
            document.getElementById("h4").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
          document.getElementById("w4").addEventListener("input", () => {
            document.getElementById("w4").classList.remove("error-border");
          });
        }
      }

      break;

    // // ARRAY 3

    case JSON.stringify(["3", "3", "1"]):
      const requiredInputsA3 = ["x1", "w1", "x2", "w2", "x3", "w3"];
      const requiredInputsForOutputA3 = ["h1", "w1", "h2", "w2", "h3", "w3"];

     
      if (counter !== 7) {
        for (const inputId of requiredInputsA3) {
          const inputElement = document.getElementById(inputId);
          if (!inputElement.value) {
            inputElement.classList.add("error-border");
            isFormValid = false;
          } else {
            inputElement.classList.remove("error-border");
            formDataObject[inputId.toUpperCase()] = parseFloat(
              inputElement.value
            );
          }
        }
      }

      for (const outputId of requiredInputsForOutputA3) {
        const outputElement = document.getElementById(outputId);
        if (!outputElement.value) {
          outputElement.classList.add("error-border");
          isFormValidForOutput = false;
        } else {
          outputElement.classList.remove("error-border");
          formDataObjectForOutput[outputId.toUpperCase()] = parseFloat(
            outputElement.value
          );
        }
      }

      if (isFormValid) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }
      if (isFormValidForOutput) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }

      if (!isFormValid) {
        // Display an error alert using Swal.fire
        alerts1('error','','Enter the required value in the highlighted Input box and then click on <b style="color:#FF6600">SUBMIT</b> button.');
        return;
      }
      

      // Only enable the "NEXT" button if the form data is valid
      document.querySelector(
        ".controllers-btn-compute button:nth-child(3)"
      ).disabled = false;

      if (counter === 1) {
        var W1_X1_H1, W2_X2_H1, W3_X3_H1;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H1) {
            W1_X1_H1 = obj.W1;
          }
          if (obj.X2 && obj.H1) {
            W2_X2_H1 = obj.W2;
          }
          if (obj.X3 && obj.H1) {
            W3_X3_H1 = obj.W3;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeOneValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeOneValues.X3) &&
          formDataObject.W1 === W1_X1_H1 &&
          formDataObject.W2 === W2_X2_H1 &&
          formDataObject.W3 === W3_X3_H1
        ) {
          console.log("successful");
          console.log(biasValue, "Bias Value");

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of H1", resultSigmoidFixed);
          drawText(210,27,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");
         noneEquationX3();

          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H1"] = resultSigmoidFixed;
          counter = 2;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
        
          alertcompute('info','H₁',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeOneValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeOneValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeOneValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H1) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      if (counter === 3) {
        console.log("clicked on next Button Second time");

        var W1_X1_H2, W2_X2_H2, W3_X3_H2;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H2) {
            W1_X1_H2 = obj.W1;
          }
          if (obj.X2 && obj.H2) {
            W2_X2_H2 = obj.W2;
          }
          if (obj.X3 && obj.H2) {
            W3_X3_H2 = obj.W3;
          }
        });

        // console.log("W1 for X1 and H1:", W1_X1_H1);
        // console.log("W2 for X2 and H2:", W2_X2_H2);

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeOneValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeOneValues.X3) &&
          formDataObject.W1 === W1_X1_H2 &&
          formDataObject.W2 === W2_X2_H2 &&
          formDataObject.W3 === W3_X3_H2
        ) {
          console.log("successful");
          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          console.log("Result of H2", resultSigmoidFixed);
          drawText(
            210,
           110,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
            "lightblue"
          );
          
          noneEquationX3();
          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H2"] = resultSigmoidFixed;
          counter = 4;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₂',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeOneValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeOneValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeOneValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H2) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H2) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }
      if (counter === 5) {
        var W1_X1_H3, W2_X2_H3, W3_X3_H3;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H3) {
            W1_X1_H3 = obj.W1;
          }
          if (obj.X2 && obj.H3) {
            W2_X2_H3 = obj.W2;
          }
          if (obj.X3 && obj.H3) {
            W3_X3_H3 = obj.W3;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeOneValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeOneValues.X3) &&
          formDataObject.W1 === W1_X1_H3 &&
          formDataObject.W2 === W2_X2_H3 &&
          formDataObject.W3 === W3_X3_H3
        ) {
          console.log("successful");
          console.log(
            "Result of H3",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);

          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(
            210,
            198,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
           "lightblue"
          );
          noneEquationX3();
          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H3"] = resultSigmoidFixed;
          counter = 6;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₃',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');
          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeOneValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeOneValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeOneValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H3) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H3) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H3) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      if (counter === 7) {
         var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");


        console.log("Submit button is clicked fourth time");
        var W1_H1_Y1, W1_H2_Y1, W1_H3_Y1;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y1) {
            W1_H1_Y1 = obj.W1;
          }
          if (obj.H2 && obj.Y1) {
            W1_H2_Y1 = obj.W1;
          }
          if (obj.H3 && obj.Y1) {
            W1_H3_Y1 = obj.W1;
          }
        });

        console.log("W1 for H1 and Y1:", W1_H1_Y1);
        console.log("W1 for H2 and Y1:", W1_H2_Y1);
        console.log("W1 for H3 and Y1:", W1_H3_Y1);

        // console.log(hValuesObject, "hValuesObject");

        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.W1 === W1_H1_Y1 &&
          formDataObjectForOutput.W2 === W1_H2_Y1 &&
          formDataObjectForOutput.W3 === W1_H3_Y1
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y1", resultSigmoidFixed);
          drawText(350,110,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");
          noneEquationH3();
          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          inputGroup.style.paddingTop = "60px";

          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          nextButtonCompute.disabled = true;
          
          let Y1=parseFloat(selectedValuesForThreeOneValues.Y1)
          alertcompute2('info','Y₁',Y1,resultFinalOutput,resultSigmoidFixed);
          
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 
            }
          }
        }

        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }

          if (formDataObjectForOutput.W1 !== W1_H1_Y1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W1_H2_Y1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W1_H3_Y1) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });

          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }
      break;

    // // ARRAY 4

    case JSON.stringify(["3", "3", "2"]):
      const requiredInputsA4 = ["x1", "w1", "x2", "w2", "x3", "w3"];
      const requiredInputsForOutputA4 = ["h1", "w1", "h2", "w2", "h3", "w3"];

     

      if (counter !== 7 && counter !== 9) {
        for (const inputId of requiredInputsA4) {
          const inputElement = document.getElementById(inputId);
          if (!inputElement.value) {
            inputElement.classList.add("error-border");
            isFormValid = false;
          } else {
            inputElement.classList.remove("error-border");
            formDataObject[inputId.toUpperCase()] = parseFloat(
              inputElement.value
            );
          }
        }
      }

      for (const outputId of requiredInputsForOutputA4) {
        const outputElement = document.getElementById(outputId);
        if (!outputElement.value) {
          outputElement.classList.add("error-border");
          isFormValidForOutput = false;
        } else {
          outputElement.classList.remove("error-border");
          formDataObjectForOutput[outputId.toUpperCase()] = parseFloat(
            outputElement.value
          );
        }
      }

      if (isFormValid) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }
      if (isFormValidForOutput) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }

      if (!isFormValid) {
        // Display an error alert using Swal.fire
        alerts1('error','','Enter the required value in the highlighted Input box and then click on <b style="color:#FF6600">SUBMIT</b> button.');
        return;
      }
      

      // Only enable the "NEXT" button if the form data is valid
      document.querySelector(
        ".controllers-btn-compute button:nth-child(3)"
      ).disabled = false;

      if (counter === 1) {
        var W1_X1_H1, W2_X2_H1, W3_X3_H1;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H1) {
            W1_X1_H1 = obj.W1;
          }
          if (obj.X2 && obj.H1) {
            W2_X2_H1 = obj.W2;
          }
          if (obj.X3 && obj.H1) {
            W3_X3_H1 = obj.W3;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeTwoValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeTwoValues.X3) &&
          formDataObject.W1 === W1_X1_H1 &&
          formDataObject.W2 === W2_X2_H1 &&
          formDataObject.W3 === W3_X3_H1
        ) {
          console.log("successful");
          console.log(biasValue, "Bias Value");

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);

          console.log("Result of H1", resultFinal);

          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(
            210,
            27,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
            "lightblue"
          );

        noneEquationX3();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          inputGroup.style.paddingTop = "60px";

          hValuesObject["H1"] = resultSigmoidFixed;
          counter = 2;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₁',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');
          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeTwoValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeTwoValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeTwoValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H1) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      if (counter === 3) {
        console.log("clicked on next Button Second time");

        var W1_X1_H2, W2_X2_H2, W3_X3_H2;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H2) {
            W1_X1_H2 = obj.W1;
          }
          if (obj.X2 && obj.H2) {
            W2_X2_H2 = obj.W2;
          }
          if (obj.X3 && obj.H2) {
            W3_X3_H2 = obj.W3;
          }
        });


        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeTwoValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeTwoValues.X3) &&
          formDataObject.W1 === W1_X1_H2 &&
          formDataObject.W2 === W2_X2_H2 &&
          formDataObject.W3 === W3_X3_H2
        ) {
          console.log("successful");
          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of H2", resultSigmoidFixed);
          drawText(
            210,
           110,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
           "lightblue"
          );
          
         noneEquationX3();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          inputGroup.style.paddingTop = "60px";

          hValuesObject["H2"] = resultSigmoidFixed;
          counter = 4;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₂',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeTwoValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeTwoValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeTwoValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H2) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H2) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }
      if (counter === 5) {
        var W1_X1_H3, W2_X2_H3, W3_X3_H3;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H3) {
            W1_X1_H3 = obj.W1;
          }
          if (obj.X2 && obj.H3) {
            W2_X2_H3 = obj.W2;
          }
          if (obj.X3 && obj.H3) {
            W3_X3_H3 = obj.W3;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForThreeTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForThreeTwoValues.X2) &&
          formDataObject.X3 === parseFloat(selectedValuesForThreeTwoValues.X3) &&
          formDataObject.W1 === W1_X1_H3 &&
          formDataObject.W2 === W2_X2_H3 &&
          formDataObject.W3 === W3_X3_H3
        ) {
          console.log("successful");
          console.log(
            "Result of H3",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            formDataObject.X3 * formDataObject.W3 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(
            210,
            198,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
           "lightblue"
          );
          noneEquationX3();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          inputGroup.style.paddingTop = "60px";

          hValuesObject["H3"] = resultSigmoidFixed;
          counter = 6;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₃',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (
            formDataObject.X1 !== parseFloat(selectedValuesForThreeTwoValues.X1)
          ) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (
            formDataObject.X2 !== parseFloat(selectedValuesForThreeTwoValues.X2)
          ) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (
            formDataObject.X3 !== parseFloat(selectedValuesForThreeTwoValues.X3)
          ) {
            document.getElementById("x3").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H3) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H3) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObject.W3 !== W3_X3_H3) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("x3").addEventListener("input", () => {
            document.getElementById("x3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      if (counter === 7) {
        console.log("Submit button is clicked fourth time");
        var W1_H1_Y1, W1_H2_Y1, W1_H3_Y1;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y1) {
            W1_H1_Y1 = obj.W1;
          }
          if (obj.H2 && obj.Y1) {
            W1_H2_Y1 = obj.W1;
          }
          if (obj.H3 && obj.Y1) {
            W1_H3_Y1 = obj.W1;
          }
        });

        console.log("W1 for H1 and Y1:", W1_H1_Y1);
        console.log("W1 for H2 and Y1:", W1_H2_Y1);
        console.log("W1 for H3 and Y1:", W1_H3_Y1);

        // console.log(hValuesObject, "hValuesObject");

        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.W1 === W1_H1_Y1 &&
          formDataObjectForOutput.W2 === W1_H2_Y1 &&
          formDataObjectForOutput.W3 === W1_H3_Y1
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y1", resultSigmoidFixed);
          drawText(365,70,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");
          noneEquationH3();
          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          inputGroup.style.paddingTop = "60px";

          counter = 8;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          let Y1=parseFloat(selectedValuesForThreeTwoValues.Y1);
          alertcompute3('info','Y₁',Y1,resultFinalOutput,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }

          if (formDataObjectForOutput.W1 !== W1_H1_Y1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W1_H2_Y1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W1_H3_Y1) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });

          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }
      if (counter === 9) {
       
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");


        console.log("Submit button is clicked fourth time");
        var W2_H1_Y2, W2_H2_Y2, W2_H3_Y2, W2_H4_Y2;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y2) {
            W2_H1_Y2 = obj.W2;
          }
          if (obj.H2 && obj.Y2) {
            W2_H2_Y2 = obj.W2;
          }
          if (obj.H3 && obj.Y2) {
            W2_H3_Y2 = obj.W2;
          }
        });

        console.log("W2 for H1 and Y2:", W2_H1_Y2);
        console.log("W2 for H2 and Y2:", W2_H2_Y2);
        console.log("W2 for H3 and Y2:", W2_H3_Y2);

        // console.log(hValuesObject, "hValuesObject");

        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.W1 === W2_H1_Y2 &&
          formDataObjectForOutput.W2 === W2_H2_Y2 &&
          formDataObjectForOutput.W3 === W2_H3_Y2
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y2", resultSigmoidFixed);
          drawText(365,205,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");
          noneEquationH3();
          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          inputGroup.style.paddingTop = "60px";

          // counter = 10;
          submitButtonCompute.disabled = true;
          nextButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;

          let Y2=parseFloat(selectedValuesForThreeTwoValues.Y2);
           alertcompute2('info','Y₂',Y2,resultFinalOutput,resultSigmoidFixed);
          
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₂" && j == 2) {
        
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        
        
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }

          if (formDataObjectForOutput.W1 !== W2_H1_Y2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W2_H2_Y2) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W2_H3_Y2) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });

          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      break;

    // ARRAY 5

    case JSON.stringify(["2", "4", "1"]):
      const requiredInputsA5 = ["x1", "w1", "x2", "w2"];
      const requiredInputsForOutputA5 = [
        "h1",
        "w1",
        "h2",
        "w2",
        "h3",
        "w3",
        "h4",
        "w4",
      ];

     
      if (counter !== 9) {
        for (const inputId of requiredInputsA5) {
          const inputElement = document.getElementById(inputId);
          if (!inputElement.value) {
            inputElement.classList.add("error-border");
            isFormValid = false;
          } else {
            inputElement.classList.remove("error-border");
            formDataObject[inputId.toUpperCase()] = parseFloat(
              inputElement.value
            );
          }
        }
      }

      for (const outputId of requiredInputsForOutputA5) {
        const outputElement = document.getElementById(outputId);
        if (!outputElement.value) {
          outputElement.classList.add("error-border");
          isFormValidForOutput = false;
        } else {
          outputElement.classList.remove("error-border");
          formDataObjectForOutput[outputId.toUpperCase()] = parseFloat(
            outputElement.value
          );
        }
      }

      if (isFormValid) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }
      if (isFormValidForOutput) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }

      if (!isFormValid) {
        // Display an error alert using Swal.fire
        alerts1('error','','Enter the required value in the highlighted Input box and then click on <b style="color:#FF6600">SUBMIT</b> button.');
        return;
      }
      
      // Only enable the "NEXT" button if the form data is valid
      document.querySelector(
        ".controllers-btn-compute button:nth-child(3)"
      ).disabled = false;

      if (counter === 1) {
        var W1_X1_H1, W2_X2_H1;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H1) {
            W1_X1_H1 = obj.W1;
          }
          if (obj.X2 && obj.H1) {
            W2_X2_H1 = obj.W2;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoOneValues.X2) &&
          formDataObject.W1 === W1_X1_H1 &&
          formDataObject.W2 === W2_X2_H1
        ) {
          console.log("successful");
          console.log(biasValue, "Bias Value");

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of H1", resultSigmoidFixed);
          drawText(
            250,
            30,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
            "lightblue"
          );

          noneEquationX2();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H1"] = resultSigmoidFixed;
          counter = 2;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;

          alertcompute('info','H₁',resultFinal,resultSigmoidFixed)
      
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoOneValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoOneValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H1) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }

      if (counter === 3) {
        console.log("clicked on next Button Second time");

        var W1_X1_H2, W2_X2_H2;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H2) {
            W1_X1_H2 = obj.W1;
          }
          if (obj.X2 && obj.H2) {
            W2_X2_H2 = obj.W2;
          }
        });

   
        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoOneValues.X2) &&
          formDataObject.W1 === W1_X1_H2 &&
          formDataObject.W2 === W2_X2_H2
        ) {
          console.log("successful");
          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          console.log("Result of H2", resultSigmoidFixed);
          drawText(
            212,
            70,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
            "lightblue"
          );
   
         noneEquationX2();
          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H2"] = resultSigmoidFixed;
          counter = 4;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;

          
          alertcompute('info','H₂',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');


          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoOneValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoOneValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H2) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }
      if (counter === 5) {
        var W1_X1_H3, W2_X2_H3;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H3) {
            W1_X1_H3 = obj.W1;
          }
          if (obj.X2 && obj.H3) {
            W2_X2_H3 = obj.W2;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoOneValues.X2) &&
          formDataObject.W1 === W1_X1_H3 &&
          formDataObject.W2 === W2_X2_H3
        ) {
          console.log("successful");
          console.log(
            "Result of H3",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(
            212,
            143,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
            "lightblue"
          );

          noneEquationX2();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H3"] = resultSigmoidFixed;
          counter = 6;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;

        
          alertcompute('info','H₃',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoOneValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoOneValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H3) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H3) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }
      if (counter === 7) {
        var W1_X1_H4, W2_X2_H4;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H4) {
            W1_X1_H4 = obj.W1;
          }
          if (obj.X2 && obj.H4) {
            W2_X2_H4 = obj.W2;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoOneValues.X2) &&
          formDataObject.W1 === W1_X1_H4 &&
          formDataObject.W2 === W2_X2_H4
        ) {
          console.log("successful");
          console.log(
            "Result of H4",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);

          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(212,218,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          x1.style.display = "none";
          x2.style.display = "none";
          w1.style.display = "none";
          w2.style.display = "none";
          plus2.style.display = "none";
          plus3.style.display = "none";
          multiply2.style.display = "none";
          multiply3.style.display = "none";
          ansSpan.style.display = "block";
          ansSpan.style.fontSize = "18px";
          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H4"] = resultSigmoidFixed;
          counter = 8;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;

         
          alertcompute('info','H₄',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoOneValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoOneValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H4) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H4) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }

      if (counter === 9) {
       var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");


        console.log("Submit button is clicked fourth time");
        var W1_H1_Y1, W1_H2_Y1, W1_H3_Y1, W1_H4_Y1;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y1) {
            W1_H1_Y1 = obj.W1;
          }
          if (obj.H2 && obj.Y1) {
            W1_H2_Y1 = obj.W1;
          }
          if (obj.H3 && obj.Y1) {
            W1_H3_Y1 = obj.W1;
          }
          if (obj.H4 && obj.Y1) {
            W1_H4_Y1 = obj.W1;
          }
        });

        console.log("W1 for H1 and Y1:", W1_H1_Y1);
        console.log("W1 for H2 and Y1:", W1_H2_Y1);
        console.log("W1 for H3 and Y1:", W1_H3_Y1);
        console.log("W1 for H4 and Y1:", W1_H4_Y1);


        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.H4 === parseFloat(hValuesObject.H4) &&
          formDataObjectForOutput.W1 === W1_H1_Y1 &&
          formDataObjectForOutput.W2 === W1_H2_Y1 &&
          formDataObjectForOutput.W3 === W1_H3_Y1 &&
          formDataObjectForOutput.W4 === W1_H4_Y1
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            formDataObjectForOutput.H4 * formDataObjectForOutput.W4 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          console.log("Result of Y1", resultSigmoidFixed);
          drawText(365,105,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");
          
          noneEquationH4();

          inputGroup.style.paddingTop = "60px";
          inputGroup.style.marginLeft = "-20px";
          
          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          nextButtonCompute.disabled = true;
          
          let Y1=parseFloat(selectedValuesForTwoOneValues.Y1)
          alertcompute2('info','Y₁',Y1,resultFinalOutput,resultSigmoidFixed);
          
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 
            }
          }
        }

        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }
          if (formDataObjectForOutput.H4 !== parseFloat(hValuesObject.H4)) {
            document.getElementById("h4").classList.add("error-border");
          }
          if (formDataObjectForOutput.W1 !== W1_H1_Y1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W1_H2_Y1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W1_H3_Y1) {
            document.getElementById("w3").classList.add("error-border");
          }
          if (formDataObjectForOutput.W4 !== W1_H4_Y1) {
            document.getElementById("w4").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });
          document.getElementById("h4").addEventListener("input", () => {
            document.getElementById("h4").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
          document.getElementById("w4").addEventListener("input", () => {
            document.getElementById("w4").classList.remove("error-border");
          });
        }
      }

      break;

    // ARRAY 6

    case JSON.stringify(["2", "4", "2"]):
      const requiredInputsA6 = ["x1", "w1", "x2", "w2"];
      const requiredInputsForOutputA6 = [
        "h1",
        "w1",
        "h2",
        "w2",
        "h3",
        "w3",
        "h4",
        "w4",
      ];

     
      if (counter !== 9 && counter !== 11) {
        for (const inputId of requiredInputsA6) {
          const inputElement = document.getElementById(inputId);
          if (!inputElement.value) {
            inputElement.classList.add("error-border");
            isFormValid = false;
          } else {
            inputElement.classList.remove("error-border");
            formDataObject[inputId.toUpperCase()] = parseFloat(
              inputElement.value
            );
          }
        }
      }

      for (const outputId of requiredInputsForOutputA6) {
        const outputElement = document.getElementById(outputId);
        if (!outputElement.value) {
          outputElement.classList.add("error-border");
          isFormValidForOutput = false;
        } else {
          outputElement.classList.remove("error-border");
          formDataObjectForOutput[outputId.toUpperCase()] = parseFloat(
            outputElement.value
          );
        }
      }

      if (isFormValid) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }
      if (isFormValidForOutput) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }

      if (!isFormValid) {
        // Display an error alert using Swal.fire
        alerts1('error','','Enter the required value in the highlighted Input box and then click on <b style="color:#FF6600">SUBMIT</b> button.');
        return;
      }
      

      // Only enable the "NEXT" button if the form data is valid
      document.querySelector(
        ".controllers-btn-compute button:nth-child(3)"
      ).disabled = false;

      if (counter === 1) {
        var W1_X1_H1, W2_X2_H1;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H1) {
            W1_X1_H1 = obj.W1;
          }
          if (obj.X2 && obj.H1) {
            W2_X2_H1 = obj.W2;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoTwoValues.X2) &&
          formDataObject.W1 === W1_X1_H1 &&
          formDataObject.W2 === W2_X2_H1
        ) {
          console.log("successful");
          console.log(biasValue, "Bias Value");

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);

          console.log("Result of H1", resultFinal);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(252,30,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          noneEquationX2();
          
          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H1"] = resultSigmoidFixed;
          counter = 2;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
         
          alertcompute('info','H₁',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoOneValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoOneValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H1) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }

      if (counter === 3) {
        console.log("clicked on next Button Second time");

        var W1_X1_H2, W2_X2_H2;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H2) {
            W1_X1_H2 = obj.W1;
          }
          if (obj.X2 && obj.H2) {
            W2_X2_H2 = obj.W2;
          }
        });

    

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoTwoValues.X2) &&
          formDataObject.W1 === W1_X1_H2 &&
          formDataObject.W2 === W2_X2_H2
        ) {
          console.log("successful");
          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          console.log("Result of H2", resultSigmoidFixed);
          drawText(212,71,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");
         
          noneEquationX2();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H2"] = resultSigmoidFixed;
          counter = 4;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₂',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoTwoValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoTwoValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H2) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }
      if (counter === 5) {
        var W1_X1_H3, W2_X2_H3;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H3) {
            W1_X1_H3 = obj.W1;
          }
          if (obj.X2 && obj.H3) {
            W2_X2_H3 = obj.W2;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoTwoValues.X2) &&
          formDataObject.W1 === W1_X1_H3 &&
          formDataObject.W2 === W2_X2_H3
        ) {
          console.log("successful");
          console.log(
            "Result of H3",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(212,145,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");
          
         noneEquationX2();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          hValuesObject["H3"] = resultSigmoidFixed;
          counter = 6;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₃',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoTwoValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoTwoValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H3) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H3) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }

      if (counter === 7) {
        var W1_X1_H4, W2_X2_H4;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H4) {
            W1_X1_H4 = obj.W1;
          }
          if (obj.X2 && obj.H4) {
            W2_X2_H4 = obj.W2;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoTwoValues.X2) &&
          formDataObject.W1 === W1_X1_H4 &&
          formDataObject.W2 === W2_X2_H4
        ) {
          console.log("successful");
          console.log(
            "Result of H4",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(212,220,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");
          

          noneEquationX2();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H4"] = resultSigmoidFixed;
          counter = 8;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₄',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoTwoValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoTwoValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H4) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H4) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }

      if (counter === 9) {
        console.log("Submit button is clicked fourth time");
        var W1_H1_Y1, W1_H2_Y1, W1_H3_Y1, W1_H4_Y1;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y1) {
            W1_H1_Y1 = obj.W1;
          }
          if (obj.H2 && obj.Y1) {
            W1_H2_Y1 = obj.W1;
          }
          if (obj.H3 && obj.Y1) {
            W1_H3_Y1 = obj.W1;
          }
          if (obj.H4 && obj.Y1) {
            W1_H4_Y1 = obj.W1;
          }
        });

        console.log("W1 for H1 and Y1:", W1_H1_Y1);
        console.log("W1 for H2 and Y1:", W1_H2_Y1);
        console.log("W1 for H3 and Y1:", W1_H3_Y1);
        console.log("W1 for H4 and Y1:", W1_H4_Y1);

        console.log(hValuesObject, "hValuesObject");
        console.log(formDataObjectForOutput, "formDataObjectForOutput");

        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.H4 === parseFloat(hValuesObject.H4) &&
          formDataObjectForOutput.W1 === W1_H1_Y1 &&
          formDataObjectForOutput.W2 === W1_H2_Y1 &&
          formDataObjectForOutput.W3 === W1_H3_Y1 &&
          formDataObjectForOutput.W4 === W1_H4_Y1
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            formDataObjectForOutput.H4 * formDataObjectForOutput.W4 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);

          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y1", resultSigmoidFixed);
          drawText(355,70,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");
         
          noneEquationH4();
          
          inputGroup.style.paddingTop = "60px";
          inputGroup.style.marginLeft = "-20px";
         
          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          counter = 10;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;

          let Y1=parseFloat(selectedValuesForTwoTwoValues.Y1);
          alertcompute3('info','Y₁',Y1,resultFinalOutput,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }
          if (formDataObjectForOutput.H4 !== parseFloat(hValuesObject.H4)) {
            document.getElementById("h4").classList.add("error-border");
          }
          if (formDataObjectForOutput.W1 !== W1_H1_Y1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W1_H2_Y1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W1_H3_Y1) {
            document.getElementById("w3").classList.add("error-border");
          }
          if (formDataObjectForOutput.W4 !== W1_H4_Y1) {
            document.getElementById("w4").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });
          document.getElementById("h4").addEventListener("input", () => {
            document.getElementById("h4").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
          document.getElementById("w4").addEventListener("input", () => {
            document.getElementById("w4").classList.remove("error-border");
          });
        }
      }
      if (counter === 11) {
       var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

       
        console.log("Submit button is clicked fourth time");
        var W2_H1_Y2, W2_H2_Y2, W2_H3_Y2, W2_H4_Y2;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y2) {
            W2_H1_Y2 = obj.W2;
          }
          if (obj.H2 && obj.Y2) {
            W2_H2_Y2 = obj.W2;
          }
          if (obj.H3 && obj.Y2) {
            W2_H3_Y2 = obj.W2;
          }
          if (obj.H4 && obj.Y2) {
            W2_H4_Y2 = obj.W2;
          }
        });

        console.log("W2 for H1 and Y2:", W2_H1_Y2);
        console.log("W2 for H2 and Y2:", W2_H2_Y2);
        console.log("W2 for H3 and Y2:", W2_H3_Y2);
        console.log("W2 for H4 and Y2:", W2_H4_Y2);

        // console.log(hValuesObject, "hValuesObject");

        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.H4 === parseFloat(hValuesObject.H4) &&
          formDataObjectForOutput.W1 === W2_H1_Y2 &&
          formDataObjectForOutput.W2 === W2_H2_Y2 &&
          formDataObjectForOutput.W3 === W2_H3_Y2 &&
          formDataObjectForOutput.W4 === W2_H4_Y2
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            formDataObjectForOutput.H4 * formDataObjectForOutput.W4 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y2", resultSigmoidFixed);
          drawText(355,150,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");
          
          noneEquationH4();

          inputGroup.style.paddingTop = "60px";
          inputGroup.style.marginLeft = "-20px";
         
          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          counter = 10;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          nextButtonCompute.disabled = true;

          let Y2=parseFloat(selectedValuesForTwoTwoValues.Y2)
          alertcompute2('info','Y₂',Y2,resultFinalOutput,resultSigmoidFixed);
           for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₂" && j == 2) {
           
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        

        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }
          if (formDataObjectForOutput.H4 !== parseFloat(hValuesObject.H4)) {
            document.getElementById("h4").classList.add("error-border");
          }
          if (formDataObjectForOutput.W1 !== W2_H1_Y2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W2_H2_Y2) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W2_H3_Y2) {
            document.getElementById("w3").classList.add("error-border");
          }
          if (formDataObjectForOutput.W4 !== W2_H4_Y2) {
            document.getElementById("w4").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });
          document.getElementById("h4").addEventListener("input", () => {
            document.getElementById("h4").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
          document.getElementById("w4").addEventListener("input", () => {
            document.getElementById("w4").classList.remove("error-border");
          });
        }
      }

      break;

    // ARRAY 7
    case JSON.stringify(["2", "3", "1"]):
      const requiredInputs = ["x1", "w1", "x2", "w2"];
      const requiredInputsForOutput = ["h1", "w1", "h2", "w2", "h3", "w3"];

     
      if (counter !== 7) {
        for (const inputId of requiredInputs) {
          const inputElement = document.getElementById(inputId);
          if (!inputElement.value) {
            inputElement.classList.add("error-border");
            isFormValid = false;
          } else {
            inputElement.classList.remove("error-border");
            formDataObject[inputId.toUpperCase()] = parseFloat(
              inputElement.value
            );
          }
        }
      }

      for (const outputId of requiredInputsForOutput) {
        const outputElement = document.getElementById(outputId);
        console.log(outputElement.value);
        if (!outputElement.value) {
          console.log("enterdd");
          outputElement.classList.add("error-border");
          isFormValidForOutput = false;
        } else {
          console.log("enterdd else");

          outputElement.classList.remove("error-border");
          formDataObjectForOutput[outputId.toUpperCase()] = parseFloat(
            outputElement.value
          );
        }
      }

      if (isFormValid) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }
      if (isFormValidForOutput) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }

      if (!isFormValid) {
        console.log(isFormValid);
        // Display an error alert using Swal.fire
        alerts1('error','','Enter the required value in the highlighted Input box and then click on <b style="color:#FF6600">SUBMIT</b> button.');
        return;
      }
     

      // Only enable the "NEXT" button if the form data is valid
      document.querySelector(
        ".controllers-btn-compute button:nth-child(3)"
      ).disabled = false;

      if (counter === 1) {
        var W1_X1_H1, W2_X2_H1;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H1) {
            W1_X1_H1 = obj.W1;
          }
          if (obj.X2 && obj.H1) {
            W2_X2_H1 = obj.W2;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoOneValues.X2) &&
          formDataObject.W1 === W1_X1_H1 &&
          formDataObject.W2 === W2_X2_H1
        ) {
          console.log("successful");
          console.log(biasValue, "Bias Value");

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);

          const resultSigmoid = sigmoid(resultFinal);

          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of H1", resultSigmoidFixed);
          drawText(
            210,
            27,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
            "lightblue"
          );

          noneEquationX2();
          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H1"] = resultSigmoidFixed;
          counter = 2;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₁',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoOneValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoOneValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H1) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }

      if (counter === 3) {
        console.log("clicked on next Button Second time");

        var W1_X1_H2, W2_X2_H2;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H2) {
            W1_X1_H2 = obj.W1;
          }
          if (obj.X2 && obj.H2) {
            W2_X2_H2 = obj.W2;
          }
        });

       

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoOneValues.X2) &&
          formDataObject.W1 === W1_X1_H2 &&
          formDataObject.W2 === W2_X2_H2
        ) {
          console.log("successful");
          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          console.log("Result of H2", resultSigmoidFixed);
          drawText(
            210,
           110,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
            "lightblue"
          );
          noneEquationX2();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H2"] = resultSigmoidFixed;
          counter = 4;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₂',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');


          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoOneValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoOneValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H2) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }
      if (counter === 5) {
        var W1_X1_H3, W2_X2_H3;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H3) {
            W1_X1_H3 = obj.W1;
          }
          if (obj.X2 && obj.H3) {
            W2_X2_H3 = obj.W2;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoOneValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoOneValues.X2) &&
          formDataObject.W1 === W1_X1_H3 &&
          formDataObject.W2 === W2_X2_H3
        ) {
          console.log("successful");
          console.log(
            "Result of H3",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(
            210,
            198,
            resultSigmoidFixed,
            "18px 'Times New Roman', Times, serif",
            "lightblue"
          );
          noneEquationX2();
          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H3"] = resultSigmoidFixed;
          counter = 6;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₃',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoOneValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoOneValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H3) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H3) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }

      if (counter === 7) {
         var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");


        console.log("Submit button is clicked fourth time");
        var W1_H1_Y1, W2_H2_Y1, W2_H3_Y1;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y1) {
            W1_H1_Y1 = obj.W1;
          }
          if (obj.H2 && obj.Y1) {
            W2_H2_Y1 = obj.W1;
          }
          if (obj.H3 && obj.Y1) {
            W2_H3_Y1 = obj.W1;
          }
        });

        console.log("W1 for H1 and Y1:", W1_H1_Y1);
        console.log("W2 for H2 and Y1:", W2_H2_Y1);
        console.log("W2 for H3 and Y1:", W2_H3_Y1);

        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.W1 === W1_H1_Y1 &&
          formDataObjectForOutput.W2 === W2_H2_Y1 &&
          formDataObjectForOutput.W3 === W2_H3_Y1
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y1", resultSigmoidFixed);
          drawText(355,105,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");

          noneEquationH3();
          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";

          let Y1=parseFloat(selectedValuesForTwoOneValues.Y1);
          alertcompute2('info','Y₁',Y1,resultFinalOutput,resultSigmoidFixed);
          
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";       
              } 
            }
          }
        }


          submitButtonCompute.disabled = true;
          nextButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;
          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }
          if (formDataObjectForOutput.W1 !== W1_H1_Y1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W2_H2_Y1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W2_H3_Y1) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      break;

    // ARRAY 8

    case JSON.stringify(["2", "3", "2"]):
      const requiredInputsA8 = ["x1", "w1", "x2", "w2"];
      const requiredInputsForOutputA8 = ["h1", "w1", "h2", "w2", "h3", "w3"];

     

      if (counter !== 7 && counter !== 9) {
        console.log("232 counter");
        for (const inputId of requiredInputsA8) {
          const inputElement = document.getElementById(inputId);
          if (!inputElement.value) {
            inputElement.classList.add("error-border");
            isFormValid = false;
          } else {
            inputElement.classList.remove("error-border");
            formDataObject[inputId.toUpperCase()] = parseFloat(
              inputElement.value
            );
          }
        }
      }

      for (const outputId of requiredInputsForOutputA8) {
        const outputElement = document.getElementById(outputId);
        if (!outputElement.value) {
          outputElement.classList.add("error-border");
          isFormValidForOutput = false;
        } else {
          outputElement.classList.remove("error-border");
          formDataObjectForOutput[outputId.toUpperCase()] = parseFloat(
            outputElement.value
          );
        }
      }

      if (isFormValid) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }
      if (isFormValidForOutput) {
        document.querySelector(
          ".controllers-btn-compute button:nth-child(3)"
        ).disabled = false; // Enable "NEXT" button
      }

      if (!isFormValid) {
        // Display an error alert using Swal.fire
        alerts1('error','','Enter the required value in the highlighted Input box and then click on <b style="color:#FF6600">SUBMIT</b> button.');
        return;
      }
      
      // Only enable the "NEXT" button if the form data is valid
      document.querySelector(
        ".controllers-btn-compute button:nth-child(3)"
      ).disabled = false;

      if (counter === 1) {
        var W1_X1_H1, W2_X2_H1;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H1) {
            W1_X1_H1 = obj.W1;
          }
          if (obj.X2 && obj.H1) {
            W2_X2_H1 = obj.W2;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoTwoValues.X2) &&
          formDataObject.W1 === W1_X1_H1 &&
          formDataObject.W2 === W2_X2_H1
        ) {
          console.log("successful");
          console.log(biasValue, "Bias Value");

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of H1", resultSigmoidFixed);
          drawText(212,28,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

          noneEquationX2();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H1"] = resultSigmoidFixed;
          counter = 2;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
         
          alertcompute('info','H₁',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');


          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoTwoValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoTwoValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H1) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }

      if (counter === 3) {
        console.log("clicked on next Button Second time");

        var W1_X1_H2, W2_X2_H2;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H2) {
            W1_X1_H2 = obj.W1;
          }
          if (obj.X2 && obj.H2) {
            W2_X2_H2 = obj.W2;
          }
        });


        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoTwoValues.X2) &&
          formDataObject.W1 === W1_X1_H2 &&
          formDataObject.W2 === W2_X2_H2
        ) {
          console.log("successful");
          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of H2", resultSigmoidFixed);
          drawText(212,110,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");


         noneEquationX2();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H2"] = resultSigmoidFixed;
          counter = 4;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₂',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoTwoValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoTwoValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H2) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }
      if (counter === 5) {
        var W1_X1_H3, W2_X2_H3;

        weightInputsArray.forEach((obj) => {
          if (obj.X1 && obj.H3) {
            W1_X1_H3 = obj.W1;
          }
          if (obj.X2 && obj.H3) {
            W2_X2_H3 = obj.W2;
          }
        });

        console.log(formDataObject);

        if (
          formDataObject.X1 === parseFloat(selectedValuesForTwoTwoValues.X1) &&
          formDataObject.X2 === parseFloat(selectedValuesForTwoTwoValues.X2) &&
          formDataObject.W1 === W1_X1_H3 &&
          formDataObject.W2 === W2_X2_H3
        ) {
          console.log("successful");
          console.log(
            "Result of H3",
            formDataObject.X1 * formDataObject.W1 +
              formDataObject.X2 * formDataObject.W2 +
              biasValue
          );

          const result =
            formDataObject.X1 * formDataObject.W1 +
            formDataObject.X2 * formDataObject.W2 +
            biasValue;

          const resultFinal = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinal);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);
          drawText(212,200,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","lightblue");

         
          noneEquationX2();

          ansSpan.innerHTML = `<p>${resultFinal}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          hValuesObject["H3"] = resultSigmoidFixed;
          counter = 6;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          alertcompute('info','H₃',resultFinal,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Input node values are indicated in <b>orange</b> in the network, and weight values are highlighted in the table');


          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObject.X1 !== parseFloat(selectedValuesForTwoTwoValues.X1)) {
            document.getElementById("x1").classList.add("error-border");
          }
          if (formDataObject.X2 !== parseFloat(selectedValuesForTwoTwoValues.X2)) {
            document.getElementById("x2").classList.add("error-border");
          }
          if (formDataObject.W1 !== W1_X1_H3) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObject.W2 !== W2_X2_H3) {
            document.getElementById("w2").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("x1").addEventListener("input", () => {
            document.getElementById("x1").classList.remove("error-border");
          });
          document.getElementById("x2").addEventListener("input", () => {
            document.getElementById("x2").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
        }
      }

      if (counter === 7) {
        console.log("Submit button is clicked fourth time");
        var W1_H1_Y1, W2_H2_Y1, W2_H3_Y1;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y1) {
            W1_H1_Y1 = obj.W1;
          }
          if (obj.H2 && obj.Y1) {
            W2_H2_Y1 = obj.W1;
          }
          if (obj.H3 && obj.Y1) {
            W2_H3_Y1 = obj.W1;
          }
        });

        console.log("W1 for H1 and Y1:", W1_H1_Y1);
        console.log("W2 for H2 and Y1:", W2_H2_Y1);
        console.log("W2 for H3 and Y1:", W2_H3_Y1);


        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.W1 === W1_H1_Y1 &&
          formDataObjectForOutput.W2 === W2_H2_Y1 &&
          formDataObjectForOutput.W3 === W2_H3_Y1
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y1", resultSigmoidFixed);
          drawText(365,70,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");

          noneEquationH3();

          inputGroup.style.paddingTop = "60px";

          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          document.getElementById("biasSpan").style.display = "none";
          counter = 8;
          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          
          let Y1=parseFloat(selectedValuesForTwoTwoValues.Y1);
          alertcompute3('info','Y₁',Y1,resultFinalOutput,resultSigmoidFixed);
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');

          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }
          if (formDataObjectForOutput.W1 !== W1_H1_Y1) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W2_H2_Y1) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W2_H3_Y1) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }
      if (counter === 9) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");



        console.log("Submit button is clicked fourth time");
        var W2_H1_Y2, W2_H2_Y2, W2_H3_Y2;

        weightInputsArray.forEach((obj) => {
          if (obj.H1 && obj.Y2) {
            W2_H1_Y2 = obj.W2;
          }
          if (obj.H2 && obj.Y2) {
            W2_H2_Y2 = obj.W2;
          }
          if (obj.H3 && obj.Y2) {
            W2_H3_Y2 = obj.W2;
          }
        });

        console.log("W1 for H1 and Y1:", W2_H1_Y2);
        console.log("W2 for H2 and Y1:", W2_H2_Y2);
        console.log("W2 for H3 and Y1:", W2_H3_Y2);

        // console.log(hValuesObject, "hValuesObject");

        if (
          formDataObjectForOutput.H1 === parseFloat(hValuesObject.H1) &&
          formDataObjectForOutput.H2 === parseFloat(hValuesObject.H2) &&
          formDataObjectForOutput.H3 === parseFloat(hValuesObject.H3) &&
          formDataObjectForOutput.W1 === W2_H1_Y2 &&
          formDataObjectForOutput.W2 === W2_H2_Y2 &&
          formDataObjectForOutput.W3 === W2_H3_Y2
        ) {
          console.log("successful");
          const result =
            formDataObjectForOutput.H1 * formDataObjectForOutput.W1 +
            formDataObjectForOutput.H2 * formDataObjectForOutput.W2 +
            formDataObjectForOutput.H3 * formDataObjectForOutput.W3 +
            biasValue;

          const resultFinalOutput = result.toFixed(2);
          const resultSigmoid = sigmoid(resultFinalOutput);
          const resultSigmoidFixed = resultSigmoid.toFixed(2);

          console.log("Result of Y2", resultSigmoidFixed);
          drawText(365,140,resultSigmoidFixed,"18px 'Times New Roman', Times, serif","pink");


           noneEquationH3();
           
          ansSpan.innerHTML = `<p>${resultFinalOutput}</p>`;
          inputGroup.style.paddingTop = "60px";

          document.getElementById("biasSpan").style.display = "none";

          submitButtonCompute.disabled = true;
          resetButtonCompute.disabled = true;
          nextButtonCompute.disabled = true;

          let Y2=parseFloat(selectedValuesForTwoTwoValues.Y2);
          alertcompute2('info','Y₂',Y2,resultFinalOutput,resultSigmoidFixed);
          
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";          
              } 
            }
          }
        }
        } else {
          console.log("unsucessful");
          alerts1('error','Incorrect Value!','Enter the correct value in highlighted cell.<br><b style="color:#FF6600">Hint:</b> Hidden node values are indicated in <b>blue</b> in the network, and weight values are highlighted in the table');


          nextButtonCompute.disabled = true;

          // Add error border to input elements that do not match the conditions
          if (formDataObjectForOutput.H1 !== parseFloat(hValuesObject.H1)) {
            document.getElementById("h1").classList.add("error-border");
          }
          if (formDataObjectForOutput.H2 !== parseFloat(hValuesObject.H2)) {
            document.getElementById("h2").classList.add("error-border");
          }
          if (formDataObjectForOutput.H3 !== parseFloat(hValuesObject.H3)) {
            document.getElementById("h3").classList.add("error-border");
          }
          if (formDataObjectForOutput.W1 !== W2_H1_Y2) {
            document.getElementById("w1").classList.add("error-border");
          }
          if (formDataObjectForOutput.W2 !== W2_H2_Y2) {
            document.getElementById("w2").classList.add("error-border");
          }
          if (formDataObjectForOutput.W3 !== W2_H3_Y2) {
            document.getElementById("w3").classList.add("error-border");
          }

          // Add event listeners to remove error border when the user types
          document.getElementById("h1").addEventListener("input", () => {
            document.getElementById("h1").classList.remove("error-border");
          });
          document.getElementById("h2").addEventListener("input", () => {
            document.getElementById("h2").classList.remove("error-border");
          });
          document.getElementById("h3").addEventListener("input", () => {
            document.getElementById("h3").classList.remove("error-border");
          });
          document.getElementById("w1").addEventListener("input", () => {
            document.getElementById("w1").classList.remove("error-border");
          });
          document.getElementById("w2").addEventListener("input", () => {
            document.getElementById("w2").classList.remove("error-border");
          });
          document.getElementById("w3").addEventListener("input", () => {
            document.getElementById("w3").classList.remove("error-border");
          });
        }
      }

      // Options for the source select

      break;

    default:
      console.log("Array not found");
      break;
  }
}

function displayEquationX3()
{

  x1.style.display = "block";
  x2.style.display = "block";
  x3.style.display = "block";
  w1.style.display = "block";
  w2.style.display = "block";
  w3.style.display = "block";
  plus2.style.display = "block";
  plus3.style.display = "block";
  plus.style.display = "block";
  multiply.style.display = "block";
  multiply2.style.display = "block";
  multiply3.style.display = "block";
  ansSpan.style.display = "none";

  document.getElementById("biasSpan").style.display = "block";
  inputGroup.style.paddingTop = "3px";



}

function displayEquationH4()
{
  x1.style.display = "none";
  h1.style.display = "block";
  x2.style.display = "none";
  x3.style.display = "none";
  h2.style.display = "block";
  h3.style.display = "block";
  h4.style.display = "block";
  h4.style.marginTop = "120px";
  w3.style.display = "block";
  w4.style.display = "block";
  w4.style.marginTop = "120px";
  w1.style.display = "block";
  w2.style.display = "block";

  plus.style.display = "block";
  multiply.style.display = "block";
  plus1.style.display = "block";
  plus1.style.marginTop = "120px";
  plus1.style.marginLeft = "-230px";
  multiply1.style.display = "block";
  multiply1.style.marginTop = "120px";
  plus2.style.display = "block";
  multiply2.style.display = "block";
  plus3.style.display = "block";
  plus3.style.marginTop = "120px";
  multiply3.style.display = "block";
  ansSpan.style.display = "none";
  inputGroup.style.paddingTop = "3px";
      
  inputGroup.style.marginLeft = "-35px";
  w3.style.marginLeft = "3px"
  h3.style.marginRight = "7px"

  multiply.style.marginTop = "0px";

  w3.style.marginTop = "0px";
  multiply.style.marginLeft = "0px";
  multiply.style.marginRight = "0px";

}

function displayEquationH3()
{
  x1.style.display = "none";
  h1.style.display = "block";
  x2.style.display = "none";
  x3.style.display = "none";
  h2.style.display = "block";
  h3.style.display = "block";
  w3.style.display = "block";
  w1.style.display = "block";
  w2.style.display = "block";
  plus.style.display = "block";
  multiply.style.display = "block";
  plus1.style.display = "none";
  multiply1.style.display = "none";
  plus2.style.display = "block";
  multiply2.style.display = "block";
  plus3.style.display = "block";
  multiply3.style.display = "block";
  ansSpan.style.display = "none";
  document.getElementById("biasSpan").style.display = "block";
  multiply.style.marginTop = "120px";
}

function displayEquationX2()
{
  x1.style.display = "block";
  x2.style.display = "block";
  w1.style.display = "block";
  w2.style.display = "block";
  plus2.style.display = "block";
  plus3.style.display = "block";
  multiply2.style.display = "block";
  multiply3.style.display = "block";
  ansSpan.style.display = "none";
  document.getElementById("biasSpan").style.display = "block";
}

function displayEquationY1()
{
  x1.style.display = "none";
  h1.style.display = "block";
  x2.style.display = "none";
  h2.style.display = "block";
  h3.style.display = "block";
  h4.style.display = "block";
  h4.style.marginTop = "120px";
  w3.style.display = "block";
  w4.style.display = "block";
  w4.style.marginTop = "120px";
  w1.style.display = "block";
  w2.style.display = "block";
  plus.style.display = "block";
  plus1.style.marginTop = "120px";
  // plus1.style.marginLeft = "-225px";
  plus1.style.marginLeft = "-230px";
  plus1.style.display = "block";
  multiply.style.display = "block";
  multiply1.style.display = "block";
  multiply1.style.marginTop = "120px";
  plus2.style.display = "block";
  multiply2.style.display = "block";
  plus3.style.display = "block";
  plus3.style.marginTop = "120px";
  multiply3.style.display = "block";
  ansSpan.style.display = "none";
  inputGroup.style.paddingTop = "3px";
  // inputGroup.style.marginLeft = "-43px";
  inputGroup.style.marginLeft = "-38px";
  document.getElementById("biasSpan").style.display = "block";
  document.getElementById("biasSpan").style.marginTop = "120px";
}

function displayEquationH3Y1()
{
  x1.style.display = "none";
  h1.style.display = "block";
  x2.style.display = "none";
  h2.style.display = "block";
  h3.style.display = "block";
  w3.style.display = "block";
  w1.style.display = "block";
  w2.style.display = "block";
  plus.style.display = "block";
  multiply.style.display = "block";
  plus2.style.display = "block";
  multiply2.style.display = "block";
  plus3.style.display = "block";
  multiply3.style.display = "block";
  ansSpan.style.display = "none";
  document.getElementById("biasSpan").style.display = "block";
  multiply.style.marginTop = "120px";

  w3.style.marginTop = "120px";
  multiply.style.marginLeft = "-118px";
  // multiply.style.marginRight = "0px";
  inputGroup.style.paddingTop = "3px";
  document.getElementById("biasSpan").style.marginTop = "120px";
  plus3.style.marginTop = "120px";
}

function enableDisableButton()
{
  submitButtonCompute.disabled = false;
  resetButtonCompute.disabled = false;
  nextButtonCompute.disabled = true;
}
const nextStep = () => {
  var arrayForNodeComputeNext = [
    controlInput.value,
    controlHidden.value,
    controlOutput.value,
  ];

  switch (JSON.stringify(arrayForNodeComputeNext)) {
    // ARRAY 1

    case JSON.stringify(["3", "4", "2"]):
      const requiredInputsA1 = ["x1", "w1", "x2", "w2", "x3", "w3"];
      const requiredInputsForOutputA1 = [
        "h1",
        "w1",
        "h2",
        "w2",
        "h3",
        "w3",
        "h4",
        "w4",
      ];
      if (counter === 2) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₁" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
            } 
            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
            } 
            }
          }
        }

        console.log(" next button is first clicked");
        document.getElementById("expressionH1").textContent = "H₂ = ";
        for (const inputId of requiredInputsA1) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }

        displayEquationX3();

       
        counter = 3;
        enableDisableButton();
       
      }

      if (counter === 4) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
              } 
            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";         
              } 

            }
          }
        }

        console.log(" next button is second clicked");
        document.getElementById("expressionH1").textContent = "H₃ = ";
        for (const inputId of requiredInputsA1) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
       displayEquationX3();

       
        w1.placeholder = "W₁₃";
        w2.placeholder = "W₂₃";
        w3.placeholder = "W₃₃";

        counter = 5;
        enableDisableButton();
      }

      if (counter === 6) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 
            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₄" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";       
              } 

            }
          }
        }

        console.log(" next button is second clicked");
        document.getElementById("expressionH1").textContent = "H₄ = ";
        for (const inputId of requiredInputsA1) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
      displayEquationX3();
 
        w1.placeholder = "W₁₄";
        w2.placeholder = "W₂₄";
        w3.placeholder = "W₃₄";

        counter = 7;
        enableDisableButton();
      }

      if (counter === 8) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₄" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";          
              } 
            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";    
            } 

            }
          }
        }

        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₁ = ";
        for (const outputId of requiredInputsForOutputA1) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

        displayEquationH4();

        document.getElementById("h1").classList.remove("error-border");
        document.getElementById("h2").classList.remove("error-border");
        document.getElementById("h3").classList.remove("error-border");
        document.getElementById("h4").classList.remove("error-border");
        document.getElementById("w3").classList.remove("error-border");
        document.getElementById("w4").classList.remove("error-border");

        document.getElementById("biasSpan").style.display = "block";
        document.getElementById("biasSpan").style.marginTop = "120px";
        
       
        w1.style.width = "40px";
        w2.style.width = "40px";
        w3.style.width = "40px";

        w1.placeholder = "W₁₁";
        w2.placeholder = "W₂₁";
        w3.placeholder = "W₃₁";
        w4.placeholder = "W₄₁";

        counter = 9;
        enableDisableButton();
      }

      if (counter === 10) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";       
            } 
            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₂" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";      
            } 

            }
          }
        }

        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₂ = ";
        for (const outputId of requiredInputsForOutputA1) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

        displayEquationH4();


        document.getElementById("biasSpan").style.display = "block";
        document.getElementById("biasSpan").style.marginTop = "120px";
       
      
        w1.style.width = "41.5px";
        w2.style.width = "41.5px";
        w3.style.width = "41.5px";
        w4.style.width = "41.5px";

        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";
        w3.placeholder = "W₃₂";
        w4.placeholder = "W₄₂";

        counter = 11;
        enableDisableButton();
      }

      break;

    // ARRAY 2

    case JSON.stringify(["3", "4", "1"]):
      const requiredInputsA2 = ["x1", "w1", "x2", "w2", "x3", "w3"];
      const requiredInputsForOutputA2 = [
        "h1",
        "w1",
        "h2",
        "w2",
        "h3",
        "w3",
        "h4",
        "w4",
      ];
      if (counter === 2) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₁" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";        
            } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
              } 

            }
          }
        }

        console.log(" next button is first clicked");
        document.getElementById("expressionH1").textContent = "H₂ = ";
        for (const inputId of requiredInputsA2) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }

        displayEquationX3();

      
        plus3.style.marginTop = "120px";
        w3.style.marginTop = "120px";
        multiply.style.marginLeft = "-129px";
        multiply.style.marginRight = "9px";
        inputGroup.style.paddingTop = "3px";

        document.getElementById("biasSpan").style.marginTop = "120px";
        w1.style.width = "41.5px";
        w2.style.width = "41.5px";
        w3.style.width = "41.5px";

        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";
        w3.placeholder = "W₃₂";

        counter = 3;
        enableDisableButton();
      }

      if (counter === 4) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";         
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          console.log(rowcompute);
          console.log(cellscompute);
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";        
              } 
            }
          }
        }

        console.log(" next button is second clicked");
        document.getElementById("expressionH1").textContent = "H₃ = ";
        for (const inputId of requiredInputsA2) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
       displayEquationX3();

      
        w1.placeholder = "W₁₃";
        w2.placeholder = "W₂₃";
        w3.placeholder = "W₃₃";

        counter = 5;
        enableDisableButton();
      }

      if (counter === 6) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";       
            } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₄" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";       
              } 

            }
          }
        }

        console.log(" next button is second clicked");
        document.getElementById("expressionH1").textContent = "H₄ = ";
        for (const inputId of requiredInputsA2) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
      displayEquationX3();

        w1.placeholder = "W₁₄";
        w2.placeholder = "W₂₄";
        w3.placeholder = "W₃₄";

        counter = 7;
        enableDisableButton();
      }

      if (counter === 8) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₄" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";       
            } 
            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";    
              } 
            }
          }
        }

        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₁ = ";
        for (const outputId of requiredInputsForOutputA2) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

        displayEquationH4();

        document.getElementById("h1").classList.remove("error-border");
        document.getElementById("h2").classList.remove("error-border");
        document.getElementById("h3").classList.remove("error-border");
        document.getElementById("h4").classList.remove("error-border");
        document.getElementById("w3").classList.remove("error-border");
        document.getElementById("w4").classList.remove("error-border");
        
        document.getElementById("biasSpan").style.display = "block";
        document.getElementById("biasSpan").style.marginTop = "120px";

        w1.placeholder = "W₁₁";
        w2.placeholder = "W₂₁";
        w3.placeholder = "W₃₁";
        w4.placeholder = "W₄₁";

        counter = 9;
        enableDisableButton();
      }

      break;

    // ARRAY 3

    case JSON.stringify(["3", "3", "1"]):
      const requiredInputsA3 = ["x1", "w1", "x2", "w2", "x3", "w3"];
      const requiredInputsForOutputA3 = ["h1", "w1", "h2", "w2", "h3", "w3"];
      if (counter === 2) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 
            }
          }
        }

        console.log(" next button is first clicked");
        document.getElementById("expressionH1").textContent = "H₂ = ";
        for (const inputId of requiredInputsA3) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
        displayEquationX3();
        
   
        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";
        w3.placeholder = "W₃₂";
        w1.style.width = "41.5px";
        w2.style.width = "41.5px";
        w3.style.width = "41.5px";

        counter = 3;
        enableDisableButton();
      }

      if (counter === 4) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";         
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";     
              } 

            }
          }
        }

        console.log(" next button is second clicked");
        document.getElementById("expressionH1").textContent = "H₃ = ";
        for (const inputId of requiredInputsA3) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
        displayEquationX3()
        w1.placeholder = "W₁₃";
        w2.placeholder = "W₂₃";
        w3.placeholder = "W₃₃";

        counter = 5;
        enableDisableButton();
      }

      if (counter === 6) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 

            }
          }
        }

        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₁ = ";
        for (const outputId of requiredInputsForOutputA3) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

        displayEquationH3();

       

        document.getElementById("h1").classList.remove("error-border");
        document.getElementById("h2").classList.remove("error-border");
        document.getElementById("h3").classList.remove("error-border");
        document.getElementById("h4").classList.remove("error-border");
        
     

        w3.style.marginTop = "120px";
        multiply.style.marginLeft = "-118px";
   
        inputGroup.style.paddingTop = "3px";
        w1.placeholder = "W₁₁";
        w2.placeholder = "W₂₁";
        w3.placeholder = "W₃₁";

        counter = 7;
        enableDisableButton();
      }

      break;

    // // ARRAY 4

    case JSON.stringify(["3", "3", "2"]):

      const requiredInputsA4 = ["x1", "w1", "x2", "w2", "x3", "w3"];
      const requiredInputsForOutputA4 = ["h1", "w1", "h2", "w2", "h3", "w3"];
      if (counter === 2) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
            } 

            }
          }
        }

        console.log(" next button is first clicked");
        document.getElementById("expressionH1").textContent = "H₂ = ";
        for (const inputId of requiredInputsA4) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }

        displayEquationX3();
        w1.style.width = "41.5px";
        w2.style.width = "41.5px";
        w3.style.width = "41.5px";

        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";
        w3.placeholder = "W₃₂";

        counter = 3;
        enableDisableButton();
      }

      if (counter === 4) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
            } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 

            }
          }
        }

        console.log(" next button is second clicked");

        document.getElementById("expressionH1").textContent = "H₃ = ";
        for (const inputId of requiredInputsA4) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
     
        displayEquationX3();
        w1.placeholder = "W₁₃";
        w2.placeholder = "W₂₃";
        w3.placeholder = "W₃₃";

        counter = 5;
        enableDisableButton();
      }

      if (counter === 6) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = ""; 
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 
            }
          }
        }

        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₁ = ";
        for (const outputId of requiredInputsForOutputA4) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

        displayEquationH3();

   
        document.getElementById("h1").classList.remove("error-border");
        document.getElementById("h2").classList.remove("error-border");
        document.getElementById("h3").classList.remove("error-border");
        document.getElementById("h4").classList.remove("error-border");
        document.getElementById("w3").classList.remove("error-border");
        document.getElementById("w4").classList.remove("error-border");
    

        w3.style.marginTop = "120px";
        multiply.style.marginLeft = "-118px";
        // multiply.style.marginRight = "0px";
        inputGroup.style.paddingTop = "3px";
        w1.placeholder = "W₁₁";
        w2.placeholder = "W₂₁";
        w3.placeholder = "W₃₁";

        counter = 7;
        enableDisableButton();
      }

      if (counter === 8) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₂" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 
            }
          }
        }

        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₂ = ";
        for (const outputId of requiredInputsForOutputA4) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

        displayEquationH3();

        w3.style.marginTop = "120px";
        multiply.style.marginLeft = "-118px";
        // multiply.style.marginRight = "0px";
        inputGroup.style.paddingTop = "3px";
        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";
        w3.placeholder = "W₃₂";

        counter = 9;
        enableDisableButton();
      }

      break;

    // ARRAY 5

    case JSON.stringify(["2", "4", "1"]):
      const requiredInputsA5 = ["x1", "w1", "x2", "w2"];
      const requiredInputsForOutputA5 = [
        "h1",
        "w1",
        "h2",
        "w2",
        "h3",
        "w3",
        "h4",
        "w4",
      ];
      if (counter === 2) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₁" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
          
            } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
                         } 

            }
          }
        }

        console.log(" next button is first clicked");
        document.getElementById("expressionH1").textContent = "H₂ = ";
        for (const inputId of requiredInputsA5) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }

        displayEquationX2();
        
        w1.style.width = "41.5px";
        w2.style.width = "41.5px";
        w3.style.width = "41.5px";

        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";

        counter = 3;
        submitButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      if (counter === 4) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 

            }
          }
        }

        console.log(" next button is second clicked");
        document.getElementById("expressionH1").textContent = "H₃ = ";
        for (const inputId of requiredInputsA5) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
        displayEquationX2();
        w1.placeholder = "W₁₃";
        w2.placeholder = "W₂₃";

        counter = 5;
        submitButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      if (counter === 6) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₄" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 

            }
          }
        }

        document.getElementById("expressionH1").textContent = "H₄ = ";
        for (const inputId of requiredInputsA5) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }

        displayEquationX2();

        w1.placeholder = "W₁₄";
        w2.placeholder = "W₂₄";

        counter = 7;
        submitButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      if (counter === 8) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₄" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 

            }
          }
        }

        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₁ = ";
        for (const outputId of requiredInputsForOutputA5) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

        displayEquationY1();
        document.getElementById("h1").classList.remove("error-border");
        document.getElementById("h2").classList.remove("error-border");
        document.getElementById("h3").classList.remove("error-border");
        document.getElementById("h4").classList.remove("error-border");
        document.getElementById("w3").classList.remove("error-border");
        document.getElementById("w4").classList.remove("error-border");
       
        w1.placeholder = "W₁₁";
        w2.placeholder = "W₂₁";
        w3.placeholder = "W₃₁";
        w4.placeholder = "W₄₁";

        counter = 9;
        submitButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      break;

    // ARRAY 6

    case JSON.stringify(["2", "4", "2"]):
      const requiredInputsA6 = ["x1", "w1", "x2", "w2"];
      const requiredInputsForOutputA6 = [
        "h1",
        "w1",
        "h2",
        "w2",
        "h3",
        "w3",
        "h4",
        "w4",
      ];
      if (counter === 2) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 

            }
          }
        }

        console.log(" next button is first clicked");
        document.getElementById("expressionH1").textContent = "H₂ = ";
        for (const inputId of requiredInputsA6) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }

        displayEquationX2();

        w1.style.width = "41.5px";
        w2.style.width = "41.5px";

        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";

        counter = 3;
        submitButtonCompute.disabled = false;
        resetButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      if (counter === 4) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 
 
            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 

            }
          }
        }

        console.log(" next button is second clicked");
        document.getElementById("expressionH1").textContent = "H₃ = ";
        for (const inputId of requiredInputsA6) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
       displayEquationX2();
        w1.placeholder = "W₁₃";
        w2.placeholder = "W₂₃";

        counter = 5;
        submitButtonCompute.disabled = false;
        resetButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      if (counter === 6) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
;
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
          
            } 
 
            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₄" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 

            }
          }
        }

        console.log(" next button is second clicked");
        document.getElementById("expressionH1").textContent = "H₄ = ";
        for (const inputId of requiredInputsA6) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
        displayEquationX2();
        w1.placeholder = "W₁₄";
        w2.placeholder = "W₂₄";

        counter = 7;
        submitButtonCompute.disabled = false;
        resetButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      if (counter === 8) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
 
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₄" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
          
            } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 

            }
          }
        }

        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₁ = ";
        for (const outputId of requiredInputsForOutputA6) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

        displayEquationY1();
        document.getElementById("h1").classList.remove("error-border");
        document.getElementById("h2").classList.remove("error-border");
        document.getElementById("h3").classList.remove("error-border");
        document.getElementById("h4").classList.remove("error-border");
        document.getElementById("w3").classList.remove("error-border");
        document.getElementById("w4").classList.remove("error-border");
      
        w1.placeholder = "W₁₁";
        w2.placeholder = "W₂₁";
        w3.placeholder = "W₃₁";
        w4.placeholder = "W₄₁";

        counter = 9;
        submitButtonCompute.disabled = false;
        resetButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      if (counter === 10) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
          
            } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 

            }
          }
        }

        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₂ = ";
        for (const outputId of requiredInputsForOutputA6) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }
        displayEquationY1();
        w1.style.width = "41.5px";
        w2.style.width = "41.5px";
        w3.style.width = "41.5px";
        w4.style.width = "41.5px";

        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";
        w3.placeholder = "W₃₂";
        w4.placeholder = "W₄₂";

        counter = 11;
        submitButtonCompute.disabled = false;
        resetButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      break;

    // ARRAY 7


    case JSON.stringify(["2", "3", "1"]):
      const requiredInputs = ["x1", "w1", "x2", "w2"];
      const requiredInputsForOutput = ["h1", "w1", "h2", "w2", "h3", "w3"];
      if (counter === 2) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₁" && j == 2) {  
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              }   

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 

            }
          }
        }

       
        document.getElementById("expressionH1").textContent = "H₂ = ";

        for (const inputId of requiredInputs) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }

        displayEquationX2();

        w1.style.width = "41.5px";
        w2.style.width = "41.5px";

        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";

        counter = 3;
        submitButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
        resetButtonCompute.disabled = false;
      }

      if (counter === 4) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
          
            } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 

            }
          }
        }

     
        console.log(" next button is second clicked");
        document.getElementById("expressionH1").textContent = "H₃ = ";
        for (const inputId of requiredInputs) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
        displayEquationX2();
        w1.placeholder = "W₁₃";
        w2.placeholder = "W₂₃";

        counter = 5;
        submitButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
        resetButtonCompute.disabled = false;
      }

      if (counter === 6) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
          
            } 
      
            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 
 
            }
          }
        }

 
        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₁ = ";
        for (const outputId of requiredInputsForOutput) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

        displayEquationH3Y1();
        document.getElementById("h1").classList.remove("error-border");
        document.getElementById("h2").classList.remove("error-border");
        document.getElementById("h3").classList.remove("error-border");
        document.getElementById("w3").classList.remove("error-border");
        

        w1.placeholder = "W₁₁";
        w2.placeholder = "W₂₁";
        w3.placeholder = "W₃₁";

        counter = 7;
        submitButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
        resetButtonCompute.disabled = false;
      }

      break;

    // ARRAY 8

    case JSON.stringify(["2", "3", "2"]):
      const requiredInputsA8 = ["x1", "w1", "x2", "w2"];
      const requiredInputsForOutputA8 = ["h1", "w1", "h2", "w2", "h3", "w3"];
      if (counter === 2) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₁" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "";
          
            } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "red 2px solid";
            
              } 
 
            }
          }
        }

        console.log(" next button is first clicked");
        document.getElementById("expressionH1").textContent = "H₂ = ";
        for (const inputId of requiredInputsA8) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }

        displayEquationX2();
        w1.style.width = "41.5px";
        w2.style.width = "41.5px";

        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";

        counter = 3;
        submitButtonCompute.disabled = false;
        resetButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      if (counter === 4) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
  
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₂" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 

            }
          }
        }

        console.log(" next button is second clicked");
        document.getElementById("expressionH1").textContent = "H₃ = ";
        for (const inputId of requiredInputsA8) {
          const inputElement = document.getElementById(inputId);
          inputElement.value = "";
        }
        displayEquationX2();
        w1.placeholder = "W₁₃";
        w2.placeholder = "W₂₃";

        counter = 5;
        submitButtonCompute.disabled = false;
        resetButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      if (counter === 6) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "H₃" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");
 
          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 

            }
          }
        }

        console.log("Next button is clicked fourth time");
        document.getElementById("expressionH1").textContent = "Y₁ = ";
        for (const outputId of requiredInputsForOutputA8) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

       
        displayEquationH3Y1();
        document.getElementById("h1").classList.remove("error-border");
        document.getElementById("h2").classList.remove("error-border");
        document.getElementById("h3").classList.remove("error-border");
        document.getElementById("w3").classList.remove("error-border");
        

        w1.placeholder = "W₁₁";
        w2.placeholder = "W₂₁";
        w3.placeholder = "W₃₁";

        counter = 7;
        submitButtonCompute.disabled = false;
        resetButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }
      if (counter === 8) {
        var tablecompute = document.getElementById("myTableCompute");
        console.log(tablecompute);
        var tbodycompute = tablecompute.getElementsByTagName("tbody")[0];

        console.log(tbodycompute);
        var rowscompute = tbodycompute.getElementsByTagName("tr");

        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₁" && j == 2) {
              for(var a=0;a<4;a++)
              {
                cellscompute[a].style.border = "";
            
              } 

            }
          }
        }
        for (var i = 0; i < rowscompute.length; i++) {
          var rowcompute = rowscompute[i];
          var cellscompute = rowcompute.getElementsByTagName("td");

          for (var j = 0; j < cellscompute.length; j++) {
            var cellcompute = cellscompute[j];
            if (cellcompute.innerHTML == "Y₂" && j == 2) {
              for(var a=0;a<4;a++)
            {
              cellscompute[a].style.border = "red 2px solid";
          
            } 

            }
          }
        }

        console.log("Next button is clicked fifth time");
        document.getElementById("expressionH1").textContent = "Y₂ = ";
        for (const outputId of requiredInputsForOutputA8) {
          const outputElement = document.getElementById(outputId);
          outputElement.value = "";
        }

        displayEquationH3Y1();
        w1.style.width = "41.5px";
        w2.style.width = "41.5px";
        w3.style.width = "41.5px";

        w1.placeholder = "W₁₂";
        w2.placeholder = "W₂₂";
        w3.placeholder = "W₃₂";

        counter = 9;
        submitButtonCompute.disabled = false;
        resetButtonCompute.disabled = false;
        nextButtonCompute.disabled = true;
      }

      // Options for the source select

      break;

    default:
      console.log("Array not found");
      break;
  }
};

function resetForm() {
  const allInputs = document.querySelectorAll(".inputcompute");
  for (const inputElement of allInputs) {
    inputElement.value = "";
    inputElement.classList.remove("error-border");
  }
  for (const outputElement of allInputs) {
    outputElement.value = "";
    outputElement.classList.remove("error-border");
  }

  submitButtonCompute.disabled = false;
  document.querySelector(
    ".controllers-btn-compute button:nth-child(3)"
  ).disabled = true; // Disable "NEXT" button
  isFormValidForOutput = true;
}

let biasValue = 0; // Declare biasValue as a global variable

function showBiasAlert() {
  Swal.fire({
    title: "Enter Bias Value",
    html:'hint : range(0,1)',
    allowOutsideClick: false,
    allowEscapeKey: false,
    input: "number",
    inputAttributes: {
      step: "0.01", // For two decimal places
      min: "0",
      max: "1",
    },
    customClass: {
      container: "firstContainer",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
    },
    confirmButtonText: "SUBMIT",
    inputValidator: (value) => {
      const enteredBiasValue = parseFloat(value);
      if (!enteredBiasValue) {
        return "You need to give numerical value!";
      }
      if (enteredBiasValue >= 0 && enteredBiasValue <= 1) {
        alerts1('info','NOTE','In our simulation, we will use the same bias value for every node.')
        const decimalCount = (enteredBiasValue.toString().split(".")[1] || [])
          .length;
        if (decimalCount <= 2) {
          biasValue = enteredBiasValue; // Update the global biasValue
          document.getElementById("biasSpan").textContent =
            biasValue.toFixed(2);
          return null; // Input is valid, return null
        } else {
          return "Invalid Bias Value. Bias value should have up to 2 decimal places.";
        }
      } else {
        return "Invalid Bias Value. Bias value should be between 0 and 1.";
      }
    },
  });
}
function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}
