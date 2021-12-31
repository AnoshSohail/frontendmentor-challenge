let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

fetch("../data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let workTitle = data[0].title;
    let playTitle = data[1].title;
    let studyTitle = data[2].title;
    let exerciseTitle = data[3].title;
    let socialTitle = data[4].title;
    let selfCareTitle = data[5].title;
    document.getElementById("titleWork").innerHTML = workTitle;
    document.getElementById("titlePlay").innerHTML = playTitle;
    document.getElementById("studyTitle").innerHTML = studyTitle;
    document.getElementById("exerciseTitle").innerHTML = exerciseTitle;
    document.getElementById("socialTitle").innerHTML = socialTitle;
    document.getElementById("selfCareTitle").innerHTML = selfCareTitle;
    daily.addEventListener("click", () => {
      let currentWork = data[0].timeframes.daily.current;
      let previousWork = data[0].timeframes.daily.previous;

      let currentPlay = data[1].timeframes.daily.current;
      let previousPlay = data[1].timeframes.daily.previous;

      let currentStudy = data[2].timeframes.daily.current;
      let previousStudy = data[2].timeframes.daily.previous;

      let currentExercise = data[3].timeframes.daily.current;
      let previousExercise = data[3].timeframes.daily.previous;

      let currentSocial = data[4].timeframes.daily.current;
      let previousSocial = data[4].timeframes.daily.previous;

      let currentSelfCare = data[5].timeframes.daily.current;
      let previousSelfCare = data[5].timeframes.daily.previous;

      console.log(currentPlay);
      document.getElementById("currentWork").innerHTML = `${currentWork}hrs`;
      document.getElementById(
        "previousWork"
      ).innerHTML = `Last Day - ${previousWork}hrs`;

      document.getElementById("currentPlay").innerHTML = `${currentPlay}hrs`;
      document.getElementById(
        "previousPlay"
      ).innerHTML = `Last Day - ${previousPlay}hrs`;

      document.getElementById("currentStudy").innerHTML = `${currentStudy}hrs`;
      document.getElementById(
        "previousStudy"
      ).innerHTML = `Last Day - ${previousStudy}hrs`;

      document.getElementById(
        "currentExercise"
      ).innerHTML = `${currentExercise}hrs`;
      document.getElementById(
        "previousExercise"
      ).innerHTML = `Last Day - ${previousExercise}hrs`;

      document.getElementById(
        "currentSocial"
      ).innerHTML = `${currentSocial}hrs`;
      document.getElementById(
        "previousSocial"
      ).innerHTML = `Last Day - ${previousSocial}hrs`;

      document.getElementById(
        "currentSelfCare"
      ).innerHTML = `${currentSelfCare}hrs`;
      document.getElementById(
        "previousSelfCare"
      ).innerHTML = `Last Day - ${previousSelfCare}hrs`;
    });
    weekly.addEventListener("click", () => {
      let currentWork = data[0].timeframes.weekly.current;
      let previousWork = data[0].timeframes.weekly.previous;

      let currentPlay = data[1].timeframes.weekly.current;
      let previousPlay = data[1].timeframes.weekly.previous;

      let currentStudy = data[2].timeframes.weekly.current;
      let previousStudy = data[2].timeframes.weekly.previous;

      let currentExercise = data[3].timeframes.weekly.current;
      let previousExercise = data[3].timeframes.weekly.previous;

      let currentSocial = data[4].timeframes.weekly.current;
      let previousSocial = data[4].timeframes.weekly.previous;

      let currentSelfCare = data[5].timeframes.weekly.current;
      let previousSelfCare = data[5].timeframes.weekly.previous;

      document.getElementById("currentWork").innerHTML = `${currentWork}hrs`;
      document.getElementById(
        "previousWork"
      ).innerHTML = `Last Day - ${previousWork}hrs`;

      document.getElementById("currentPlay").innerHTML = `${currentPlay}hrs`;
      document.getElementById(
        "previousPlay"
      ).innerHTML = `Last Day - ${previousPlay}hrs`;

      document.getElementById("currentStudy").innerHTML = `${currentStudy}hrs`;
      document.getElementById(
        "previousStudy"
      ).innerHTML = `Last Day - ${previousStudy}hrs`;

      document.getElementById(
        "currentExercise"
      ).innerHTML = `${currentExercise}hrs`;
      document.getElementById(
        "previousExercise"
      ).innerHTML = `Last Day - ${previousExercise}hrs`;

      document.getElementById(
        "currentSocial"
      ).innerHTML = `${currentSocial}hrs`;
      document.getElementById(
        "previousSocial"
      ).innerHTML = `Last Day - ${previousSocial}hrs`;

      document.getElementById(
        "currentSelfCare"
      ).innerHTML = `${currentSelfCare}hrs`;
      document.getElementById(
        "previousSelfCare"
      ).innerHTML = `Last Day - ${previousSelfCare}hrs`;
    });
    monthly.addEventListener("click", () => {
      let currentWork = data[0].timeframes.monthly.current;
      let previousWork = data[0].timeframes.monthly.previous;

      let currentPlay = data[1].timeframes.monthly.current;
      let previousPlay = data[1].timeframes.monthly.previous;

      let currentStudy = data[2].timeframes.monthly.current;
      let previousStudy = data[2].timeframes.monthly.previous;

      let currentExercise = data[3].timeframes.monthly.current;
      let previousExercise = data[3].timeframes.monthly.previous;

      let currentSocial = data[4].timeframes.monthly.current;
      let previousSocial = data[4].timeframes.monthly.previous;

      let currentSelfCare = data[5].timeframes.monthly.current;
      let previousSelfCare = data[5].timeframes.monthly.previous;

      document.getElementById("currentWork").innerHTML = `${currentWork}hrs`;
      document.getElementById(
        "previousWork"
      ).innerHTML = `Last Day - ${previousWork}hrs`;

      document.getElementById("currentPlay").innerHTML = `${currentPlay}hrs`;
      document.getElementById(
        "previousPlay"
      ).innerHTML = `Last Day - ${previousPlay}hrs`;

      document.getElementById("currentStudy").innerHTML = `${currentStudy}hrs`;
      document.getElementById(
        "previousStudy"
      ).innerHTML = `Last Day - ${previousStudy}hrs`;

      document.getElementById(
        "currentExercise"
      ).innerHTML = `${currentExercise}hrs`;
      document.getElementById(
        "previousExercise"
      ).innerHTML = `Last Day - ${previousExercise}hrs`;

      document.getElementById(
        "currentSocial"
      ).innerHTML = `${currentSocial}hrs`;
      document.getElementById(
        "previousSocial"
      ).innerHTML = `Last Day - ${previousSocial}hrs`;

      document.getElementById(
        "currentSelfCare"
      ).innerHTML = `${currentSelfCare}hrs`;
      document.getElementById(
        "previousSelfCare"
      ).innerHTML = `Last Day - ${previousSelfCare}hrs`;
    });
  });
