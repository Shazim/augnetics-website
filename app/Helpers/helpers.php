<?php
use Illuminate\Database\Eloquent\Builder;

/**
 * User: Mehroz
 * Email: mehroze.yousaf@ideatolife.me
 * Description: The following method is used to get file name
 */
if (!function_exists('get_filename')) {
    function get_filename($path = null, $separator = null)
    {
        if (!empty($path) && !empty($separator)) {
            $exploded = explode($separator, $path);
            return isset($exploded[1]) ? trim($exploded[1], "\/") : false ;
        }

        return false;
    }       
}

/**
 * User: Mehroz
 * Email: mehroze.yousaf@ideatolife.me
 * Description: The following method is used to limit string
 */
function stringLimit($string, $limit, $dots = "...")
{
    if (strlen($string) > $limit) {
        return substr($string, 0, $limit) . $dots;
    } else {
        return $string;
    }
}