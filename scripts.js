const dog = document.getElementById("dog");

document.body.onpointermove = (event) => {
    const { clientX, clientY } = event;
    dog.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };
