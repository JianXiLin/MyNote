#
[[1. 数组、链表]]
## 1. [11]盛最多水的容器

### 1.1 描述

    给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
    在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
    找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

### 1.2 解法

```java
public int maxArea(int[] data) {

    int max = 0;
    for (int i = 0, j = height.length-1; i<j;) {
        int minHeight = data[i] < data[j] ? data[i++]:data[j--];
        int area = (j-i+1) * minHeight;
        max = Math.max(max,area);
    }

    return max;
}
```

## 2. [283]移动零

### 2.1 描述

    给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
    输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]

### 2.2 解法

```java

public void moveZeroes(int[] nums) {
    if(nums==null) {
        return;
    }
    //两个指针i和j
    int j=0;
    for(int i=0;i<nums.length;i++) {
        //当前元素!=0，就把其交换到左边，等于0的交换到右边
        if(nums[i]!=0) {
            int tmp = nums[i];
            nums[i] = nums[j];
            nums[j++] = tmp;
        }
    }
}
```

## 3. [70]爬楼梯

### 3.1 描述

    你在爬楼梯。 需要n步才能到达顶部。
    每次您可以爬 1 步或 2 步。
    你可以通过多少种不同的方式登上顶峰？

### 3.2 解法

```java
public int climbStairs(int n) {
    int[] dp = new int[n + 1];
    dp[0] = 1;
    dp[1] = 1;
    for(int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```

## 4. [15]三数之和

### 4.1 描述

    给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
    使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

### 4.2 解法

```java
public static List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> ans = new ArrayList();
    int len = nums.length;
    if(nums == null || len < 3) return ans;
    Arrays.sort(nums); // 排序
    for (int i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        int L = i+1;
        int R = len-1;
        while(L < R){
            int sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                ans.add(Arrays.asList(nums[i],nums[L],nums[R]));
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }        
    return ans;
}
```
