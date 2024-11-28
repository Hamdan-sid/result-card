function check(){
    let physicsTotalMark = Number(document.getElementById("phyTotalMarks").value);
    let physicsObtainedMark = Number(document.getElementById("phyObtainedMarks").value);
    document.getElementById("phyTotal").innerText = physicsTotalMark;
    document.getElementById("phyObtained").innerText = physicsObtainedMark;

    let chemistryTotalMark = Number(document.getElementById("chmTotalMarks").value);
    let chemistryObtainedMark = Number(document.getElementById("chmObtainedMarks").value);
    document.getElementById("chmTotal").innerText = chemistryTotalMark;
    document.getElementById("chmObtained").innerText = chemistryObtainedMark;

    let mathTotalMark = Number(document.getElementById("mathTotalMarks").value);
    let mathObtainedMark = Number(document.getElementById("mathObtainedMarks").value);
    document.getElementById("mthTotal").innerText = mathTotalMark;
    document.getElementById("mthObtained").innerText = mathObtainedMark;
    
    
    document.getElementById("Total").innerText = physicsTotalMark + chemistryTotalMark + mathTotalMark;
     document.getElementById("Obtain").innerText = physicsObtainedMark + chemistryObtainedMark + mathObtainedMark;
   
     let percentagep = (physicsObtainedMark / physicsTotalMark) * 100
            console.log(" Physics percentage" , percentagep,"%");

            let percentagec = (chemistryObtainedMark / chemistryTotalMark) * 100
            console.log(" Chemistry percentage" , percentagec,"%");


            let percentagem = (mathObtainedMark / mathTotalMark) * 100
            console.log("Maths percentage" , percentagem,"%");
 
            let Totalmarksobtain= physicsObtainedMark + chemistryObtainedMark + mathObtainedMark;
            let Totalnumber = physicsTotalMark + chemistryTotalMark + mathTotalMark;
            let percentagetot = (Totalmarksobtain / Totalnumber) * 100
            console.log("Total percentage" , percentagetot,"%");
    
}