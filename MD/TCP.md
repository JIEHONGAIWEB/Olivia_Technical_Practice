#### 传输层-TCP

---

> Note ：
>
> 传输控制协议

 :smile: start 

---

<img src="http://www.clipartbest.com/cliparts/LiK/7Mn/LiK7MnpXT.gif" alt="蒲公英" style="zoom: 50%;float:left;" />

---

### 1 产生

1. ##### <span style="background-color:blue;color:white">谁创造的？</span>

    > **罗伯特·卡恩**
    >
    > ​	鲍勃·卡恩(Bob Kahn)，生于美国纽约州纽约市布鲁克林区，发明了TCP协议，并与文特·瑟夫一起发明了IP协议;这两个协议成为互联网存在基石。
    >
    > ![img](https://img0.baidu.com/it/u=3368792024,2623284014&fm=26&fmt=auto&gp=0.jpg)
   >
   > 
   >
   > 
   >
   > **文特·瑟夫**,文顿·格雷·瑟
   >
   > 英语：Vinton Gray Cerf，1943年6月23日-
   >
   > ​	文特·瑟夫，是20世纪70年代创建互联网的元老之一，
   >
   > ​	1943年6月23日出生于美国洛杉矶。文特·瑟夫现任谷歌公司副总裁兼首席互联网专家。
   >
   > ​	他和罗伯特·卡恩合作设计了TCP/IP协议及互联网的基础体系结构。许多人把瑟夫看作“互联网之父”之 一。
   >
   > ​	2004年，卡恩和瑟夫因为他们在互联网协议方面所取得的杰出成就而荣膺美国计算机学会（ACM）颁发的图灵奖。
   >
   > ​	2007年年3月，瑟夫受聘为清华大学名誉教授。
   >
   > ![img](https://iknow-pic.cdn.bcebos.com/b21c8701a18b87d66c105ddf000828381e30fda4?x-bce-process%3Dimage%2Fresize%2Cm_lfit%2Cw_600%2Ch_800%2Climit_1%2Fquality%2Cq_85%2Fformat%2Cf_jpg)
   >
   > 

   

2. ##### 什么时候出来的？

   1973年

   开发出来是在1973年，而真正的大面积应用是在1983年。

3. ##### 为什么创造？

   把两台计算机连在一起，只是迈出了建立互联网的一小步。
   
   人们很快发现，如果要把更多的不同型号的计算机，通过不同规格的网络连接在一起，还要让它们能<span style="background-color:yellow"><u>共享内容</u></span>，就非得发明一套更先进的技术不可。
   
   > 1. 连接更多的电脑
   > 2. 共享数据

### 2 它是什么

- TCP

  传输控制协议TCP（TransmissionControlProtocol)

  > `协议` `规则`

- 定义

  TCP是一个协议

- <span style="background-color:yellow"><u>特征5点</u></span>

  1. 面向连接。 

  2. 端到端。 

  3. 可靠的。 

  4. 全双工。 

  5. 字节流。

- <span style="background-color:yellow"><u>功能4点</u></span>

  1. 可靠
  2. 流量
  3. 拥塞
  4. 连接

### 3 能干什么

1. 可靠

   - 3次握手4次挥手-建立连接，释放连接

   - 超时重传

   - 停止等待

2. 流量

   目的：发送方别太快，让接收方，`来得及`接。

   1. 窗口 
   2. 快慢

3. 拥塞

   1. 什么情况下，会出现拥塞。
   2. 控制

### 4 主能做什么

##### 1. 连接

###### 建立

​	3次握手机制

![建立连接](https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190321%2F828442e6cdc5456aa5f1470a35cbf044.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628133303&t=9213d9f17f91cb5f1a713f86f1560528)

###### 结束

<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F18924199-9ff6e9104125519d.jpg&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628133431&t=e5264e5a3adb0c5393dfe2f14fffe6d4" alt="连接释放" style="zoom:50%;" />

###### 状态展示

