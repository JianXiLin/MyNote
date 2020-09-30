#

## 模式切换

|按键|功能|补充|
|-|-|-|
|i|进入"写入模式(插入)"||
|a|进入"写入模式(追加)"||
|ESC|进入"正常模式"||
|:|从"正常模式"进入"命令模式"||
|v|进入"可视模式"|Shift + v -- 行<br/>Ctrl + v -- 块|

## 光标移动

|按键|功能|补充|
|-|-|-|
|Shift + i|在行前插入||
|Shift + a|在行后追加||
|0|移动到行前||
|hjkl|左上下右||

## 操作指令i

格式: <operation> <motion>

|<operation>|<motion>||
|-|-|-|
||||
|d|d||
|d|->||
|d|num ->||
|y||复制|
|p||粘贴|
|c||改变并进入"写入模式"|
|c|w|改变光标后到词|
|c|iw|改变光标所在到词|
|x||删除当前字符|
|f|字符|找到并移动到该字符|
||||
||||
||||
||||
||||
||||
||||
||||
||||

w : 下一个词
b : 上一个词
number 
方向键
i : 以当前词为目标
i " : 以当前""内到内容为目标
f 字符:
g : 最前
G : 最后

/ 搜索内容
adasdkj
enter 进入搜索结果
n 下一个

## 命令

```
:source $MYVIMRC
<!-- 打开高亮 -->
syntax on
<!-- 开启行号显示 -->
set number
set relativenumber
<!-- 显示底行 -->
set cursorline
<!-- 自动换行 -->
set wrap
<!--  -->
set showcmd
<!-- tab 补全 -->
set wildmenu

<!-- 搜索 -->
<!-- 高亮显示搜索结果 -->
set hlsearch
<!-- 去除高亮显示搜索结果 -->
exec "nohlsearch" <!-- 边写入搜索条件,边高亮 -->
set incsearch
<!-- 忽略大小写 -->
set ignorecase
<!-- 智能大小写识别 --> set smartcase

let mapleader=" j"
noremap <LEADER><CR> :nohlsearch <CR>
```

## 可视模式

可视模式下,选择内容

: normal Aasfasf

行模式 (V)

块模式 (Ctrl+v)

选中某块区域的文本,进入写入模式后,编辑块内到当前行相应内容,再按esc 块内到其它行也将完成相应的操作. 

## 分屏

split
vsplit

光标在右边
set splitright
光标在左边
set nosplitright

:e(edit) 文件路径

map sl :set splitright<CR>:split<CR>
map sh :set nosplitright<CR>:split<CR>
map sj :set splitbelow<CR>:split<CR>
map sk :set nosplitbelow<CR>:split<CR>

光标切换
ctrl+w

map <LEADER>l <C-w>l


分屏大小
:rep +5
:vertical resize+5
map <up> :rep+5<CR>
map <right> :vertical resize+5<CR>


## 标签页

:tabe 
:+tabenext
:-tabenext

## vim的配置

创建~/.vim文件夹,vimrc
在此文件内写vim的命令,即可实现vim的全局配置

### vim快捷键修改

```vimrc
<!-- noremap 原键位 新映射到键位 -->
noremap k 5k
noremap j 5j

map s <nop>
map S :w<CR>
map Q :q<CR>

```

### 插件

#### airline

#### 


## 键位修改

#### linux下 Esc 映射为 Caplock

##### 临时修改

使用xmodmap修改,修改相应的键asd盘映射

在`~/.xmodmap`文件内,填写以下内容,再运行 `xmodmap .xmodmap`

```xmodmap  
<!-- Caps_lock键与ESC交换  -->
remove Lock = Caps_Lock
add Lock = Escape
keysym Caps_Lock = Escape
keysym Escape = Caps_Lock
```

##### 永久修改

修改`/usr/share/X11/xkb/keycodes/evdev`文件,交换\<ESC>和\<CAPS>的值

#### VSCodeVim 的键盘映射修改

VSCodeVim是VSCode下的一个使用Vim来编辑文本的插件.
由于该插件不支持Capslock按键的映射,所以需要通过VSCode的快捷键来实现Capslock到esc到映射.

通过 File->Perferences->keyboard shortcuts ,并点击右上角的切换到json文件的图标,以此打开VSCode的keybindings.json文件,并添加如下内容.

```json
[
    {
        "key":" capslock",
        "command":"extension.vim_escape",
        "when":"editorTextFocus && vim.active && !inDebugRepl"
    }
]
```
