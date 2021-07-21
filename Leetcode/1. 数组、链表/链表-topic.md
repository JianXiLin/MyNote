#
[[1. 数组、链表]]
## 1. [206]反转链表

### 1.1 描述

    给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

    输入：head = [1,2,3,4,5]
    输出：[5,4,3,2,1]

### 1.2 解法

#### 解法一：迭代

```java
public ListNode reverseList(ListNode head){
    ListNode newHead = new ListNode();
    for(null != head ){
        ListNode next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
}
```

#### 解法二：递归

```java
public ListNode reverseList(ListNode head){
    return reverseListInt(head,null);
}

private ListNode reverseListInt(ListNode head, ListNode newHead) {
    if(null == head){
        return head;
    }
    ListNode next = head.next;
    hext.next = newHead;
    return reverseListInt(next,head);
}
```

