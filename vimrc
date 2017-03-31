set nocompatible "Use vim, not vi

set history=1000 "Remember last 1000 commands
set undolevels=1000 "Able to undo 1000 commands
"set encoding=utf-8 "UTF-8 encoding in all files

set novisualbell "Disable flashing screen upon hitting side
set noerrorbells "Disable sound info upon hitting side
set laststatus=2 "Always show statusbar

set hlsearch    "Highlight search
set ignorecase  "ignorecase when searching
set smartcase   "Don't ignore case if search contains captial

set number      "Enable line numbers"
set autoread    "Auto read when file changed outside VIM"
set textwidth=79 wrapmargin=0 "Enable wrapping of lines
set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab
set backspace=indent,eol,start "Normal backspace functionality


set rtp+=~/.vim/bundle/Vundle.vim "Add vundle to runtime path
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'vim-scripts/PyChimp'

call vundle#end()
filetype plugin indent on


""Enable mouse support:
"
"if has("mouse")
"       set mouse=a
"endif

syntax on
colorscheme pychimp
