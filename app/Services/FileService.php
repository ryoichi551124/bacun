<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileService
{
    /**
     * ファイルをストレージに保存・保存先URLを返す
     *
     * @param UploadedFile $file
     * @param string $directory
     * @return string ファイル保存先URL
     */
    static function store(UploadedFile $file, string $directory): string
    {
        $path = $file->storeAs('public/' . $directory, $file->getClientOriginalName());
        $file_url = url(Storage::url($path));
        return $file_url;
    }
}
