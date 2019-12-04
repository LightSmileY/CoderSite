#### 文章

1. getNewArticles()

   获取10个最新文章，如page=1返回查询结果的第1-10个，page=2返回第11-20个

   方法：GET

   参数：{page: Number}

2. getHotArticles()

   获取10个热门文章，通过（点赞数*0.2评论数*0.3*收藏数*0.5）进行排序

   方法：GET

   参数：{page: Number}

3. getRecommendArticles()

   获取10个推荐给用户的文章，{page: Number}

   方法：GET

   参数：{uid: "", page: Number}

4. getFollowsArticles()

   获取某用户的关注人发表的10个最新文章

   方法：GET

   参数：{uid: "", page: Number}

5. getArticlesByLabels()

   通过标签查询10个文章

   方法：GET

   参数：{labels: [], page: Number}

6. getArticlesByKeywords()

   通过关键词搜索10个文章

   方法：GET

   参数：{key: "", page: Number}

7. getArticlesByKeywords()

   通过用户id搜索该用户发表的10个文章

   方法：GET

   参数：{uid: "", page: Number}

8. getCollectArticles()

   获取某用户收藏的10个文章

   方法：GET

   参数：{uid: "", page: Number}

1~8 返回值Json对象模板：

```javascript
{
  code: 0,  					//成功为0，失败为-1
  articleList: [{
    aid: "",
    userId: "",
    userNickname: "",
    postTime: "",
    labels: [],
    title: "",
    content: [
      {
        para: String,
        image: String
      }
    ],
    image: "",   			//第一张图片
    likeCount: Number,
    collectCount: Number,
    commentCount: Number
  }]
}
```



8. getArticleById()

   通过id查询1个文章

   方法：GET

   参数：{uid: String, aid: String}

   返回值：

   ```javascript
   {
     code: 0,  					//成功为0，失败为-1
     article: {
       aid: "",
       userId: "",
       userNickname: "",
       isAttent: "",			//自己是否关注了发帖人
       postTime: "",
       labels: [""],
       title: "",
       content: [
         {
           para: String,
           image: String
         }
       ],
       images: [""],
       comments: [{
       	cid: "",
       	uid: "",
       	avatar: "",
       	nickname: "",
       	content: "",
       	time: ""
       }]
       isLike: Boolean,
       likeCount: Number,
       isCollect: Boolean,
       collectCount: Number,
       commentCount: Number
     }
   }
   ```

9. addArticle()

   发表一篇文章

   方法：POST

   参数：

   ```javascript
   {
     aid: "",
     uid: "",
     postTime: "",
     labels: [""],
     title: "",
     content: [
       {
         para: String,
         image: String
       }
     ]
   }
   ```

   返回值: 

   ```javascript
   {
     code: 0,
     message: "发表成功"
   }
   ```

10. deleteArticleById()

    通过文章id和用户id删除1个文章

    方法：DELETE

    参数：{id: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "删除成功"
    }
    ```

11. likeArticle()

    点赞

    方法：POST

    参数：{id: "", uid: "", pid: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "点赞成功"
    }
    ```

12. unlikeArticle()

    取消点赞

    方法：DELETE

    参数：{id: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "取消点赞
    }
    ```

13. collectArticle()

    收藏

    方法：POST

    参数：{id: "", uid: "", pid: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "收藏成功"
    }
    ```

14. uncollectArticle()

    取消收藏

    方法：DELETE

    参数：{id: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "取消收藏"
    }
    ```

15. commentArticle()

    评论 && 回复评论

    方法：POST

    参数：

    ```javascript
    {
      id: "", 
      uid: "",    //评论者
      objId: "",  //被评论者
      pid: "",
      content: ""
    }
    ```

    返回值：

    ```javascript
    {
      code: 0,
      message: "评论成功"
    }
    ```

16. deleteComment()

    删除评论

    方法：DELETE

    参数：{id: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "删除成功"
    }
    ```

    

#### 问题

1. getNewQuestions()

   获取10个最新问题

   方法：GET

   参数：{page: Number}

2. getHotQuestions()

   获取10个热门问题，通过（点赞数*0.2评论数*0.3*收藏数*0.5）进行排序

   方法：GET

   参数：{page: Number}

3. getRecommendQuestions()

   获取10个推荐给用户的问题，{page: Number}

   方法：GET

   参数：{uid: "", page: Number}

4. getFollowsQuestions()

   获取某用户的关注人发表的10个最新问题

   方法：GET

   参数：{uid: "", page: Number}

5. getQuestionsByLabels()

   通过标签查询10个问题

   方法：GET

   参数：{labels: [], page: Number}

6. getQuestionsByKeywords()

   通过关键词搜索10个问题

   方法：GET

   参数：{key: "", page: Number}

7. getQuestionsByKeywords()

   通过用户id搜索该用户发表的10个问题

   方法：GET

   参数：{uid: "", page: Number}

8. getCollectQuestions()

   获取某用户收藏的10个问题

   方法：GET

   参数：{uid: "", page: Number}

1~8 返回值Json对象模板：

```javascript
{
  code: 0,  					//成功为0，失败为-1
  questionList: [{
    qid: "",
    userId: "",
    userNickname: "",
    postTime: "",
    labels: [],
    title: "",
    content: "",
    image: "",   			//第一张图片
    likeCount: Number,
    collectCount: Number,
    commentCount: Number
  }]
}
```



8. getQuestionById()

   通过id查询1个文章

   方法：GET

   参数：{uid: String, qid: String}

   返回值：

   ```javascript
   {
     code: 0,  					//成功为0，失败为-1
     question: {
       qid: "",
       userId: "",
       userNickname: "",
       isAttent: "",			//自己是否关注了发帖人
       postTime: "",
       labels: [""],
       title: "",
       content: "",
       images: [""],
       answers: [{
       	aid: "",
       	uid: "",
       	avatar: "",
       	nickname: "",
       	content: "",
       	time: ""
       }]
       isLike: Boolean,
       likeCount: Number,
       isCollect: Boolean,
       collectCount: Number,
       answerCount: Number
     }
   }
   ```

9. addQuestion()

   发表一个问题

   方法：POST

   参数：

   ```javascript
   {
     qid: "",
     uid: "",
     postTime: "",
     labels: [""],
     title: "",
     content: "",
     images: [""]
   }
   ```

   返回值: 

   ```javascript
   {
     code: 0,
     message: "发表成功"
   }
   ```

10. deleteQuestionById()

    通过问题id和用户id删除1个文章

    方法：DELETE

    参数：{id: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "删除成功"
    }
    ```

11. likeQuestion()

    点赞

    方法：POST

    参数：{id: "", qid: "", uid: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "点赞成功"
    }
    ```

12. unlikeQuestion()

    取消点赞

    方法：DELETE

    参数：{id: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "取消点赞"
    }
    ```

    

13. collectQuestion()

    收藏

    方法：POST

    参数：{id: "", qid: "", uid: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "收藏成功"
    }
    ```

    

14. uncollectQuestion()

    取消收藏

    方法：DELETE

    参数：{id: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "取消收藏"
    }
    ```

    

15. answerQuestion()

    回答  && 回复回答

    方法：POST

    参数：

    ```javascript
    {
      aid: "", 
      qid: "", 
      uid: "",
      objUid: "",
      content: ""
    }
    ```

    返回值：

    ```javascript
    {
      code: 0,
      message: "回答成功"
    }
    ```

16. deleteAnswer()

    删除回答

    方法：DELETE

    参数：{id: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "删除成功"
    }
    ```

    

#### 用户

 1. getUserInfo()

    获取用户资料

    方法：GET

    参数：{id: ""}

    返回值：

    ```javascript
    {
    	code: 0,
    	userInfo: {
        userId: "",
        nickname: "",
        sex: Boolean,
        avartar: "",
        description: "",
        mailbox: "",
        label: [""]
      }
    }
    ```

 2. updateUserInfo()

    修改用户资料

    方法：POST

    参数：

    ```javascript
    {
    	userId: "",
    	nickname: "",
    	sex: Boolean,
    	avartar: "",
    	description: "",
    	mailbox: "",
    	label: [""]
    }
    ```

    返回值：

    ```javascript
    {
      code: 0,
      message: "修改成功"
    }
    ```

 3. getFansList()

    获取某用户的所有粉丝

    方法：GET

    参数：{uid: ""}

    返回值：

    ```javascript
    {
      code: 0,
      attents: {
        uid: "",
        nickname: "",
        description: "",  //用户签名
        isAttent: ""  //自己是否关注了该用户
      }
    }
    ```

 4. getAttentList()

    获取用户的所有关注

    方法：GET

    参数：{uid: ""}

    返回值：

    ```javascript
    {
      code: 0,
      attents: {
        uid: "",
        nickname: "",
        description: ""  //用户签名
      }
    }
    ```

 5. attentUser()

    关注用户

    方法：POST

    参数：{uid: "", objId: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "关注成功"
    }
    ```

 6. unAttentUser()

    取消关注用户

    方法：DELETE

    参数：{uid: "", objId: ""}

    返回值：

    ```javascript
    {
      code: 0,
      message: "取消关注"
    }
    ```

#### 其他

 1. getSlides()

    获取首页幻灯片

    方法：GET

    返回值：

    ```javascript
    {
      code: 0,
      slides: [{
        
      }]
    }
    ```

    