CREATE OR REPLACE VIEW PicturesWithUsers AS
    SELECT P.*, U.username, U.avatarUrl
    FROM Pictures P NATURAL JOIN Users U;