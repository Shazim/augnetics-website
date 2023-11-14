<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Http\Requests\Home\ContactUsForm;
use App\Mail\Home\ContactUs as HomeContactUs;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    /**
    * Contact us form
    * @author Mehroz - I2L
    */
    public function contactUs(ContactUsForm $request) {
        try {
            // Getting request
            $data = [
                NAME => request(NAME),
                OCCUPATION => request(OCCUPATION),
                USECASE => request(USECASE),
                EMAIL => request(EMAIL),
                MESSAGE => request(MESSAGE)
            ];

            // Getting mail address to be sent to
            $toEmail = 'omran@augnetics.ai';

            //return new HomeContactUs($data);
            Mail::to($toEmail)->send(new HomeContactUs($data));

            return redirect()->back()->with('success_message', 'Form submitted successfully!');

        } catch (Exception $e) {
            Log::info("Email Exception: " . $e->getMessage());

            return redirect()->back()->with('failed_message', 'Something went wrong!');
        }
    }
}
