<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileService
{
    static function store(UploadedFile $file, string $directory)
    {
        $path = $file->storeAs('public/' . $directory, $file->getClientOriginalName());
        $file_url = url(Storage::url($path));
        return $file_url;
    }
}
