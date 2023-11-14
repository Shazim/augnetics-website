<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{config('app.name')}}</title>
        
    </head>
    <body>
        <div style="text-align: left;">
            <p>
                Name: {{ $senderName }}
            </p>
            <p>
                Occupation: {{ $senderOccupation }}
            </p>
            <p>
                UseCase: {{ $senderUseCase }}
            </p>
            <p>
                Email: {{ $senderEmail }}
            </p>
            <p>
                Message: {{ $senderMessage }}
            </p>
        </div>
        <div style="margin-top: 30px;">
            <p>Best Wishes,<br>
            <strong>{{config('app.name')}}</strong></p>
        </div>
    </body>
</html>




