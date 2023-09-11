<?php

use Illuminate\Support\Facades\Log;

if (!function_exists('debug')) {
    function debug($debug)
    {
        return Log::debug($debug);
    }
}
