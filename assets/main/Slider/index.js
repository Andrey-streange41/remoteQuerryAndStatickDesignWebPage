let currentState = "assets/Images/target.png";

function setTarget(newState) {
  const currentImg = document.getElementById("targetPicture");
  currentImg.src = newState;
  currentImg.style.width = "80vw";
  currentImg.style.height = "557px";
  currentState = newState;
}

function selectBorder(template) {
  const img = document.getElementById(template);
  img.style.border = "solid red 4px";
}

function unselectBorder(prevTarget) {
  const img = document.getElementById(prevTarget);
  img.style.border = "none";
}
function moveRight() {
  const select = document.getElementById("selectBlock");
}
let leftPosition = 0;
function moveLeft() {
  const transportBlock = document.getElementById("transport");
  transportBlock.style.marginLeft = leftPosition + -30 + "px";
  leftPosition += -30;
}
class Slider {
  changeTarget() {
    if (currentState === "assets/Images/target.png") {
      setTarget("assets/Images/t1.png");
      unselectBorder("template6");
      selectBorder("template2");
      moveLeft();
    } else if (currentState === "assets/Images/t1.png") {
      setTarget("assets/Images/t2.png");
      unselectBorder("template2");
      selectBorder("template3");
    } else if (currentState === "assets/Images/t2.png") {
      setTarget("assets/Images/t3.png");
      unselectBorder("template3");
      selectBorder("template4");
    } else if (currentState === "assets/Images/t3.png") {
      setTarget("assets/Images/t4.png");
      unselectBorder("template4");
      selectBorder("template5");
    } else if (currentState === "assets/Images/t4.png") {
      setTarget("assets/Images/t5.png");
      unselectBorder("template5");
      selectBorder("template6");
      moveRight();
    } else if (currentState === "assets/Images/t5.png") {
      setTarget("assets/Images/target.png");
      moveRight();
    }
  }

  returnTarget() {
    if (currentState === "assets/Images/target.png") {
        setTarget("assets/Images/t1.png");
        selectBorder("template1");
       //moveright
      }
      if (currentState === "assets/Images/t1.png") {
        setTarget("assets/Images/t5.png");
        unselectBorder("template1");
        selectBorder("template5");
       //moveright
      }
      if (currentState === "assets/Images/t5.png") {
        setTarget("assets/Images/t4.png");
        unselectBorder("template5");
        selectBorder("template4");
       //moveright
      }
      if (currentState === "assets/Images/t4.png") {
        setTarget("assets/Images/t3.png");
        unselectBorder("template4");
        selectBorder("template3");
       //moveright
      }
      if (currentState === "assets/Images/t3.png") {
        setTarget("assets/Images/t2.png");
        unselectBorder("template3");
        selectBorder("template2");
       //moveright
      }
      if (currentState === "assets/Images/t2.png") {
        setTarget("assets/Images/t1.png");
        unselectBorder("template2");
        selectBorder("template1");
       //moveright
      }
  }

  render() {
    const sliderDescrBlock = document.createElement("section");
    sliderDescrBlock.classList.add("slider-box-and-descr");

    const slider = document.createElement("section");
    slider.classList.add("slider-box");

    const targetPicture = document.createElement("img");
    targetPicture.src = "assets/Images/target.png";
    targetPicture.classList.add("target-slider-Image");
    targetPicture.alt = "targetPicture";
    targetPicture.id = "targetPicture";

    const selectBlock = document.createElement("section");
    selectBlock.classList.add("select-image");
    selectBlock.id = "selectBlock";

    const transportBlock = document.createElement("section");
    transportBlock.classList.add("transportBlock");
    transportBlock.id = "transport";

    const imgOptions = [
      { cl: "elipseRight", src: "assets/Images/Ellipse.png" },
      { cl: "arrow-right", src: "assets/Images/arrow.png" },
      { cl: "t-img", src: "assets/Images/t1.png" },
      { cl: "t-img", src: "assets/Images/t2.png" },
      { cl: "t-img", src: "assets/Images/t3.png" },
      { cl: "t-img", src: "assets/Images/t4.png" },
      { cl: "t-img", src: "assets/Images/t5.png" },
      { cl: "elipse", src: "assets/Images/Ellipse.png" },
      { cl: "arrow-left", src: "assets/Images/arrowleft.png" },
    ];

    for (let i = 0; i < imgOptions.length; i++) {
      const element = document.createElement("img");
      element.src = imgOptions[i].src;
      element.classList.add(imgOptions[i].cl);
      element.alt = "picture";
      if (i === 0 || i === 1) {
        element.addEventListener("click", this.changeTarget);
        selectBlock.append(element);
      }
      if (i > 1 && i < 7) {
        element.id = "template" + i;
        transportBlock.append(element);
      }
      if (i >= 7) {
        element.addEventListener("click", this.returnTarget);
        selectBlock.append(element);
      }
    }

    sliderDescrBlock.append(slider);
    slider.append(targetPicture);
    slider.append(selectBlock);
    selectBlock.append(transportBlock);

    const descriptionPart = new DescribeBlock();
    sliderDescrBlock.append(descriptionPart.render());

    return sliderDescrBlock;
  }
}
