<template>
    <body bgcolor="#b7baf4" vlink="#ff0000">

    <!-- comment: heading -->
    <h1><span style="color:brown">Zhongli</span> <font color="#FF0000"> be like:</font></h1>
    <p>I will <br /> have order</p>
    <hr noshade>
    <div style="background-color:green; color:white; padding:20px;">
        <p><b> how bold of you </b></p>
        <p><big> how bigggg </big></p>
        <p><i> tower of pisa </i></p>
        <p><em> im like the above </em></p>
        <p><small> mouse </small></p>
        <p><strong> POWERFUL </strong></p>
        <p><sub> smol </sub></p>
        <p><sup> above </sup></p>
        <p><ins> going in </ins></p>
        <p><del> gone </del></p>
        <p align="center"> im in the middle </p>
        <p align="right"> over here bro </p>
    </div>
    <hr width="50%" />
    <hr width="50px" />
    <hr width="20%" align="right" />

    <!-- image -->
    <div align="center">
    <img src="HoshinoBanner.jpg" alt="no ojisan" />
    </div>

    <!-- hyperlink -->
    <p align="center"><a href="https://www.pixiv.net/en/artworks/109553788"><strong>Sauce</strong></a></p>

    <!-- ordered list -->
    <ol align="left">
    <li>いち</li>
    <li>に</li>
    <li>さん</li>
    </ol>

    <!-- unordered list -->
    <ul align="left">
        <li><span style="color:red;">あか</span></li>
        <li><span style="color:blue;">あお</span></li>
        <li><span style="color:green;">みどり</span></li>
    </ul>

    <!-- table -->
    <table border="2px" align="center">

    <!-- table row -->
    <tr>
    <!-- table col -->
        <td bgcolor="pink">Hoshino</td>
        <td bgcolor="tomato">Megumin</td>
        <td bgcolor="dodgerblue">Roxy</td>
        <td bgcolor="lightgray">Elaina</td>
    </tr>

    <tr>
        <td><p align="center">Best Waifu</p></td>
        <td colspan="3"><p align="center">Sub Waifu</p></td>
    </tr>
    </table>

    <div align="center"><a href="https://www.pixiv.net/en/" target="_blank">
        <img src="MarineHorni.png" width="128px" height="128px" border="1px" alt="horni come here" /></a></div>

    <p><a href="https://www.sololearn.com/profile/779259" target="_blank"> Sololearn </a></p>

    <!-- form GET for data visible/POST for data security-->
    <form action="action.php" method="POST">
        <input type="text" placeholder=Username name="username" /><br />
        <input type="password" placeholder=Password name="password" /><br />
        <button type="submit" value="Submit">SUBMIT</button>
        <button type="reset" value="Reset">RESET</button>
    </form>
    
    <!-- radio type -->
    <input type="radio" name="gender" value="male" /> Male <br />
    <input type="radio" name="gender" value="female" /> Female <br />
    <input type="radio" name="gender" value="helicopter" /> Helicopter <br />
    <input type="radio" name="gender" value="unknown" /> Unknown <br />

    <!-- checkbox -->
    <input type="checkbox" name="gender value=" /> Male <br />
    <input type="checkbox" name="gender value=" /> Female <br />

    <!-- textarea -->
    <textarea name="message"></textarea>

    <!-- follow me -->
    <div class="section" align="center">
    <h1><span>My social</span></h1>
    <iframe height="150" width="300" src="AmeDumb.png" allowfullscreen frameborder="0"></iframe>
    </div>

    </body>
</template>

<script>
    export default {
        name: "TestZone",
    }
</script>