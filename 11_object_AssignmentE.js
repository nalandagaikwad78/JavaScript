const sbibank = {
bankName: "SBI Bank",
location: "Pune",
accountNo: "125367898664",
ifsc: "sbi243500046",
interestRate:"5%",

 showDetails: function () {
 console.log (`Bank Name: ${this.bankName},  Location: ${this.location},  Account No: ${this.accountNo} ,   IFSC Code:${this.ifsc},  InterestRate:${this.interestRate}`);
 },
};
sbibank.showDetails();

const axisBank = {
    bankName: "Axis Bank",
    location: "Lohara",
    accountNo: "086367894551",
    ifsc: "ax0002430012",
    interestRate:"12%",
    
     showDetails: function () {
     console.log (`Bank Name: ${this.bankName},  Location: ${this.location},  Account No: ${this.accountNo} ,   IFSC Code:${this.ifsc},  InterestRate:${this.interestRate}`);
     },
    };
    axisBank.showDetails();
    const hdfcBank = {
        bankName: "HDFC Bank",
        location: "Latur",
        accountNo: "234863675486",
        ifsc: "hdfc000231200",
        interestRate:"10%",
        
         showDetails: function () {
         console.log (`Bank Name: ${this.bankName},  Location: ${this.location},  Account No: ${this.accountNo} ,   IFSC Code:${this.ifsc},  InterestRate:${this.interestRate}`);
         },
        };
        hdfcBank.showDetails();

        const yesBank = {
            bankName: "YES Bank",
            location: "Satara",
            accountNo: "07554800675436",
            ifsc: "yes000231200",
            interestRate:"9%",
            
             showDetails: function () {
             console.log (`Bank Name: ${this.bankName},  Location: ${this.location},  Account No: ${this.accountNo} ,   IFSC Code:${this.ifsc},  InterestRate:${this.interestRate}`);
             },
            };
            yesBank.showDetails();