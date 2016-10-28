@extends('app')

@section('layout')
    <div class="main-content">
        @yield('backend.content')
    </div>
    <div class="app-footer">
        <div class="col-xs-12 col-md-12">
            <span class="app-footer-text">----------Footer-----------</span>
        </div>
    </div>
@stop