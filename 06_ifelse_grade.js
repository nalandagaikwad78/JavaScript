
function voteEligibility(age){
    if(age==null || age==undefined){
        console.log(`${age}: is Invalid data `);
    }else{
        if(age<=0 || age>120){
            console.log(` Age : ${age} is not eligible for vote`);
        }else{
            if(age<18){
                console.log(` Age: ${age} is not eligible for voting`);
            }else{
                console.log(`Age: ${age} is eligible for voting`);
            }
        }
    }
    }
    voteEligibility(45);
    console.log(`--------------------------------------`);
    voteEligibility(17);
    console.log(`--------------------------------------`);
    voteEligibility(8);
    console.log(`--------------------------------------`);
    voteEligibility(20);
    console.log(`--------------------------------------`);
    voteEligibility(-10);
    console.log(`--------------------------------------`);
    voteEligibility(200);
    console.log(`--------------------------------------`);
    voteEligibility(0);
    console.log(`--------------------------------------`);
    voteEligibility(undefined);
    console.log(`--------------------------------------`);
    voteEligibility(null);