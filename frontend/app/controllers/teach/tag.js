import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TeachTagController extends Controller {
  @inject me;

  @tracked list = ["Literacy", "STEM", "Environmental conservation", "Emotional well-being", "Life skills and values",
    "Fitness and nutrition", "Creative arts", "Community service", "Learners with special needs", "Music and movement", "Entrepreneurship",
    "Health and safety", "Language Learning"]
  @tracked mylist = []


  @tracked tag;

  @tracked tags = [];


  @action
  addtag() {
    if (this.tag) {
      this.tags.pushObject(this.tag);
      this.set("tag", "");
    }
  }

  @action
  async updateTags() {
    let id = this.get("model").id;

    console.log(id);
    let chapter = await this.store.findRecord('chapter', id);
    chapter.set("tags", this.tags);
    chapter.save();
    this.transitionToRoute('teach.preview', id);

  }

  @action
  removetag(item) {
    this.tags.removeObject(item);

  }

  @action
  addme(item) {
    this.list.removeObject(item);
    this.mylist.addObject(item);
  }

  @action
  removeme(item) {
    this.list.addObject(item);
    this.mylist.removeObject(item);
  }

}
