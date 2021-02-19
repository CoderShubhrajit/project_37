class Contestant
{
    constructor()
    {
        this.index = null;
        //this.distance = 0;
    }
    getCount()
    {
        var contestantCountref = database.ref("contestantCount");
        contestantCountref.on("value",(data)=>{contestantCount = data.val();});
    }
    updateCount(count)
    {
        database.ref("/").update({contestantCount : count});
    }
    /*update()
    {
        var contestantIndex = "Players/Player"+this.index;
        database.ref(contestantIndex).set({Name : this.name, Distance : this.distance});
    }
    static getPlayerInfo()
    {
        var PlayerInfoRef = database.ref("Players");
        PlayerInfoRef.on("value",(data)=>{AllPlayers = data.val();});
    }*/
}