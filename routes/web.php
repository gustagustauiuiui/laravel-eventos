<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Index'))->name('index');
Route::get('/eventos', fn () => Inertia::render('Eventos/Index'))->name('eventos.index');

Route::get('/evento/criar', fn() => Inertia::render(''))->name('');
Route::get('/evento/1', fn() => Inertia::render('Eventos/PaginaEvento'))->name('');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
