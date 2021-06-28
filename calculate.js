$(document).ready(function () {


    $("#calculate").click(function () {

        let Bdate = $("#Bdate").val();
        console.log(typeof Bdate);
        let currentDate = $("#TodayDate").val();

        $.ajax({
            type: "POST",
            url: "code.php",
            data: {
                BirthDate: Bdate,
                todayDate: currentDate
            },
            dataType: "json",
            success: function (response) {
                $("#diffYear").text(response.Diffyear);
                $("#diffMonth").text(response.Diffmonth);
                $(".day").text(response.Diffday);
                $("#Month").text(response.Month);
                
                if(response.Diffmonth <= 3 && response.Diffyear == 0){
                    $("#ageType").text("You are New Born");
                    $("#AgePerson").attr("src", "https://image.freepik.com/free-vector/newborn_1308-16447.jpg");
                }
                else if(response.Diffmonth <= 12 && response.Diffyear == 0){
                    $("#ageType").text("You are Baby");
                    $("#AgePerson").attr("src", "https://image.freepik.com/free-vector/vector-illustration-cute-happy-baby-holding-baby-milk-bottle_96037-527.jpg");
                }
                else if(response.Diffyear >= 1 && response.Diffyear < 3){
                    $("#ageType").text("You are Toddler");
                    $("#AgePerson").attr("src", "https://image.freepik.com/free-vector/toddler-grow-cycle-process_97632-738.jpg");
                }

                else if(response.Diffyear >= 3 && response.Diffyear < 5){
                    $("#ageType").text("You are Pre school Child");
                    $("#AgePerson").attr("src", "https://img.freepik.com/free-vector/kid-playing-with-drum_33070-3726.jpg?size=338&ext=jpg");
                }
                else if(response.Diffyear >= 5 && response.Diffyear < 12){
                    $("#ageType").text("You are Grade school Child");
                    $("#AgePerson").attr("src", "https://image.freepik.com/free-vector/cartoon-kids-reading-book_29190-3882.jpg");
                }
                else if(response.Diffyear >= 12 && response.Diffyear < 18){
                    $("#ageType").text("You are Teenager");
                    $("#AgePerson").attr("src", "https://image.freepik.com/free-vector/teen-college-student-set_97632-747.jpg");
                }
                else if(response.Diffyear >= 18 && response.Diffyear < 30){
                    $("#ageType").text("You are Young Adult");
                    $("#AgePerson").attr("src", "https://image.freepik.com/free-vector/portrait-young-employee-team_74855-7822.jpg");
                }
                else if(response.Diffyear >= 30 && response.Diffyear < 50){
                    $("#ageType").text("You are Adult");
                    $("#AgePerson").attr("src", "https://image.freepik.com/free-vector/people-wearing-autumn-clothes_23-2148322908.jpg");
                }
                else if(response.Diffyear >= 50){
                    $("#ageType").text("You are Elder");
                    $("#AgePerson").attr("src", "https://image.freepik.com/free-vector/active-elderly-people_52683-43721.jpg");
                }
            }
        });

        
    });

});