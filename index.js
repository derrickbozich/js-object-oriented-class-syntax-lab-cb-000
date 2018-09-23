class BoardMember {
  constructor(name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

  veto() => "No, I must disagree";
  approve() => "You can do that!";
  doCharity() => "I like to help people.";
}
