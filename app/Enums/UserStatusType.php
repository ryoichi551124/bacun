<?php

namespace App\Enums;

enum UserStatusType: int
{
    case NON = 0;
    case MAIN = 1;
    case TEMPORARY = 2;
}
