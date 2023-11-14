<?php

namespace App\Mail\Home;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactUs extends Mailable
{
    use Queueable, SerializesModels;

    protected $mailData;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mailData)
    {
        $this->mailData = $mailData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.home.contact-us')
            ->subject('Contact Us')
            ->with([
                'senderName' => $this->mailData[NAME],
                'senderEmail' => $this->mailData[EMAIL],
                'senderUseCase' => $this->mailData[USECASE],
                'senderOccupation' => $this->mailData[OCCUPATION],
                'senderMessage' => $this->mailData[MESSAGE],
                'logo' => asset('icons/shoof-logo-180x180.png'),
            ]);
    }
}
