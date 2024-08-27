class Twitter {
    constructor() {
        this.map = new Map();
    }

    postTweet(userId, tweetId) {
        let tweets = this.map.get(userId) || [];
        tweets.push(tweetId);
        this.map.set(userId, tweets);
    }

    getNewsFeed(userId) {
        return this.map.get(userId);
    }

    follow(followerId, followeeId) {
        const followeeTweets = this.map.get(followeeId);
        const followerTweets = this.map.get(followerId);

        this.map.set(followerId, [...followeeTweets, ...followerTweets]);
    }

    unfollow(followerId, followeeId) {
        const followeeTweets = this.map.get(followeeId);
        const followerTweets = this.map.get(followerId);
        const ids = followerTweets.filter((id) => {
            return !followeeTweets.includes(id);
        });
        this.map.set(followerId, ids);
    }
}

const twitter = new Twitter();
twitter.postTweet(1, 5);
twitter.postTweet(1, 6);
twitter.postTweet(2, 2);
twitter.postTweet(2, 7);
console.log(twitter.getNewsFeed(1));
console.log(twitter.getNewsFeed(2));
twitter.follow(1, 2);
console.log(twitter.getNewsFeed(1));
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1));
