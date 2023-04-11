---
# 这是文章的标题
title: 代码优化
# 这是页面的图标
icon: Code
---
### 乘除法
位操作只需一个指令周期即可完成
左乘右除
`<<`(向左位移) 针对二进制，转换成二进制后(32位)向左边移动n位 ，相当于这个整数乘以2的n次方；
`>>`(向右位移) 针对二进制，转换成二进制后(32位)向右移动n位,相当于这个整数除以2的n次方,正数高位补0, 正数高位补1；
```c
 MOTOR->DATA.Angle_Infinite = (int32_t) (8192 * MOTOR->DATA.Laps + MOTOR->DATA.Angle_now);
上述代码可优化为
    MOTOR->DATA.Angle_Infinite = (int32_t) (MOTOR->DATA.Laps << 13  + MOTOR->DATA.Angle_now);
```