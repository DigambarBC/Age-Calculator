<?php

    if (isset($_POST['BirthDate'])) {
        
        $Bdate =  $_POST['BirthDate'];
        $todayDate = $_POST['todayDate'];

        // $bday = date('d-m-Y',$Bdate);
        // $today = date('d-m-Y',$todayDate);

        $b1 = '05-09-2002';
        $b2  = '19-05-2021';

        // echo gettype($b1);

        // echo "b1 = ".$b1;
        $newBday = new DateTime($Bdate);
        $newToday = new DateTime($todayDate);
        $diff = $newToday->diff($newBday);

        // formula = month + 12 * year i.e (18 year , 8 months, 14 days old)
        $month = $diff->m + 12 * $diff->y;


        // echo gettype($Bdate);
        // echo "Bdate = ".$Bdate;
        $diffyear = $diff->y; 
        $diffmonth = $diff->m; 
        $diffday = $diff->d;
        // printf($month, $diff->d);


        $data = array(
            'Month'=>$month,
            'Diffyear'=>$diffyear,
            'Diffmonth'=>$diffmonth,
            'Diffday'=>$diffday 
        );

        echo json_encode($data);
    }
