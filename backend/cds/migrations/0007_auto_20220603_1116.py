# Generated by Django 3.2.8 on 2022-06-03 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cds", "0006_auto_20220602_1619"),
    ]

    operations = [
        migrations.AlterField(
            model_name="lecture",
            name="date",
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="lecture",
            name="lecture_note",
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
