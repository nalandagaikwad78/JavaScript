console.log(`${'-----TCS Interview Eligibility------'}`);

function gradeCalculation(gradScore, hscScore, sscScore, candidateName){
if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
    console.log(`Congrates "${candidateName}" you are elligible for TCS interview`);
 } else {
     console.log(`Unfortunately "${candidateName}"  you are not elligible for TCS interview`);
 }
}
gradeCalculation(80, 86, 90, "Jon")
gradeCalculation(70, 65, 55, "Santosh")
gradeCalculation(60, 79, 88, "Ajay")

