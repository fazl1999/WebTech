<?php

        $jsonString = file_get_contents("2.json", JSON_UNESCAPED_UNICODE);
        $rrow = json_decode($jsonString);
        $schiotchik=0;
        $count = count($rrow->review);
        foreach ($rrow->review as $number => $item) {
            $schiotchik++;
            $name = $item->name;
            $email = $item->email;
            $rev = $item->rev;
            echo "<div style='border: 3px solid black; padding: 10px; margin-right: 10 px; text-align: center;' >";
            echo '<span>Имя: </span>'.$name.'<br><span">email: </span>'.$email.'<br><span>Отзыв: </span>'.$rev.'<br>';  
            echo "</div>";
            if($schiotchik==$count)break;
        }
?>