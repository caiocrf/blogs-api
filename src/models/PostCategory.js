module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }, { timestamps: false, 
      underscored: true, 
      tableName: 'posts_categories' });
  
    PostCategory.associate = ({ BlogPost, Category }) => {
      BlogPost.belongsToMany(Category, {
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
      });
      Category.belongsToMany(BlogPost, {
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'blogPosts',
      });
    };
  
    return PostCategory;
  }