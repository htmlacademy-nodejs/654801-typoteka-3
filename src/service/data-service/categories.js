"use strict";

const Sequelize = require(`sequelize`);
const {Aliase} = require(`../models/constants`);

class CategoriesService {
  constructor(sequelize) {
    this._Category = sequelize.models.Category;
    this._ArticleCategory = sequelize.models.ArticleCategory;
  }

  async findAll(withCount) {
    if (withCount) {
      const categoriesWithCounts = await this._Category.findAll({
        attributes: [`id`, `name`, [Sequelize.fn(`COUNT`, `*`), `count`]],
        group: [Sequelize.col(`Category.id`)],
        include: [
          {
            model: this._ArticleCategory,
            as: Aliase.ARTICLE_CATEGORIES,
            attributes: [],
          },
        ],
      });

      return categoriesWithCounts.map((it) => it.get());
    } else {
      return await this._Category.findAll({raw: true});
    }
  }
}

module.exports = CategoriesService;
