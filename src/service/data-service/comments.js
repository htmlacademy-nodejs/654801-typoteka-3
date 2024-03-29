"use strict";

class CommentsService {
  constructor(sequelize) {
    this._Article = sequelize.models.Article;
    this._Comment = sequelize.models.Comment;
  }

  async create(articleId, comment) {
    return await this._Comment.create({articleId, ...comment});
  }

  async drop(id) {
    const deletedRows = this._Comment.destroy({where: {id}});
    return !!deletedRows;
  }

  async findAll(articleId) {
    return this._Comment.findAll({where: {articleId}, raw: true});
  }
}

module.exports = CommentsService;
