#

## 鼠标

```ahk
;设置开启、关闭鼠标循环移动点击

global break_e = 0

#^+e::
    break_e = 1
return

#^+k::
break_e = 0
Loop
{
    MouseClick, left, 1200, 290
    MouseClick, left, 433, 286
    MouseClick, left, -200, 340
    MouseClick, left, 433, 286

    if( break_e = 1)
    {
        return
    }
}
return ;
```

## 窗口

```ahk
if WinExist("ahk_class OrpheusBrowserHost") or WinExist("ahk_class" . ClassName)
    WinActivate  ; 使用上次找到的窗口.

MsgBox % "The active window's ID is " . WinExist("A")


Run, Notepad,, Max, PID  ; 最小化运行记事本.

WinWait, ahk_pid %PID%  ; 等待记事本进程的出现.
; 将文本发送到不活动的记事本编辑控件.
; 省略了第三个参数, 因此使用最后一个找到的窗口.
ControlSend, Edit1, This is a line of text in the notepad window.{Enter}
ControlSendRaw, Edit1, Notice that {Enter} is not sent as an Enter keystroke with ControlSendRaw.

;MsgBox, Press OK to activate the window to see the result.
;WinActivate, ahk_pid %PID%  ; 显示结果.

ControlClick, X28 Y-15, ahk_class Notepad, WinText, left, 1, NA
Send,!F 
```


